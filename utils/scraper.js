const { default: axios } = require("axios");
const { load } = require("../node_modules/cheerio");
const { BASE_URL } = require("../utils/config.json");
const { humanFileSize } = require("../utils");

class Scraper {
  static baseURL = BASE_URL;
  constructor() {
    if (!Scraper.baseURL) {
      throw new Error("BASE_URL is not defined.");
    }
  }

  static http = axios.create({
    baseURL: BASE_URL,
  });

  static isUrl = (url) => {
    return url.match(
      new RegExp(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
        "gi",
      ),
    );
  };

  static unsplash = async (query) => {
    const res = await this.http.get("/search/unsplash", {
      params: {
        q: query,
      },
    });
    return res.data;
  };

  static wallpapers = async (query) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://www.wallpaperflare.com/search?wallpaper=${query}`, {
          headers: {
            Cookie:
              "_ga=GA1.1.862585048.1739895945; _ga_EZMQTMLQ1T=GS1.1.1739895944.1.1.1739898142.0.0.0",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
          },
        })
        .then((res) => {
          const $ = load(res.data);
          const results = [];
          $('li[itemprop="associatedMedia"]').each((index, element) => {
            const title = $(element)
              .find('figcaption[itemprop="caption description"]')
              .text();
            const image = $(element)
              .find('img[itemprop="contentUrl"]')
              .attr("data-src");
            const dimensions = $(element).find("span.res").text();
            const url = $(element)
              .find('li[itemprop="associatedMedia"] a[itemprop="url"]')
              .attr("href");
            const description = $(element)
              .find('meta[itemprop="description"]')
              .attr("content");
            const type = $(element)
              .find('meta[itemprop="fileFormat"]')
              .attr("content");
            const size = $(element)
              .find('meta[itemprop="contentSize"]')
              .attr("content");
            results.push({
              title,
              size,
              dimensions,
              type,
              description,
              url,
              download: image,
            });
          });
          if (results.length > 0) {
            resolve({
              creator: "darlingg",
              status: true,
              data: results,
            });
          } else {
            reject("No wallpapers found");
          }
        })
        .catch((error) => reject(new Error(error).message));
    });
  };

  static soundcloud = (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response_search = await this.http.get("/search/soundcloud", {
          params: {
            q: query,
            limit: 1,
          },
        });
        if (!response_search.data || !response_search.data.data.length) {
          return reject({
            creator: "darlingg",
            status: false,
            msg: "No results found",
          });
        }
        const track = response_search.data.data[0];
        const response_download = await this.http.get("/download/soundcloud", {
          params: {
            url: track.link,
          },
        });
        resolve({
          creator: "darlingg",
          status: true,
          data: {
            title: track.title,
            artist: track.artist,
            genre: track.genre,
            album: track.album,
            play: track.play,
            likes: track.likes,
            comments: track.comments,
            url: track.link,
            avatar: response_download.data.data.author.avatar_url,
            image: response_download.data.data.imageURL,
            download: response_download.data.data.url,
          },
        });
      } catch (error) {
        reject({ creator: "darlingg", status: false, msg: error.message });
      }
    });
  };

  static getAdmins = async (participants) => {
    let admin = [];
    for (const i of participants) {
      i.admin === "superadmin"
        ? admin.push(i.id)
        : i.admin === "admin"
          ? admin.push(i.id)
          : "";
    }
    return admin || [];
  };

  /**
   * 
   * @typedef {Object} ISizeFromUrl
   * @property {string} creator creator name
   * @property {boolean} status status
   * @property {number} size size file url
   * @property {string} size_format size formated
   */

  /**
   * 
   * @param {string} url
   * @returns {Promise<ISizeFromUrl>}
   */
  static sizeFromUrl = async (url) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.isUrl(url)) {
          return reject({
            creator: "darlingg",
            status: false,
            msg: "Invalid URL",
          });
        }
        const res = await axios.head(url);
        const size = res.headers["content-length"];
        if (!size) {
          return reject({
            creator: "darlingg",
            status: false,
            msg: "Size not found",
          });
        }
        resolve({
          creator: "darlingg",
          status: true,
          size: Number(size),
          size_format: humanFileSize(size, true, 2),
        });
      } catch (error) {
        reject({
          creator: "darlingg",
          status: false,
          msg: error.message || new Error(error).message || error.toString() || String(error),
        });
      }
    });
  };
}

module.exports = Scraper;
