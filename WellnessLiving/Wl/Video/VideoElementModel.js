/**
 * Api to return list of video categories.
 *
 * Results of the methods can be viewed in the model.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_VideoElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * Keys of the locations, where this video is available.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * Keys of the staff members, who are on the video.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * Keys of the video category, where these video can be found.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_video_category = undefined;

  /**
   * Date when video upload.
   *
   * @get result
   * @type {string}
   */
  this.dtl_upload = undefined;

  /**
   * Video file.
   * This property is not used, but need for correct generate model.
   *
   * @post post
   * @type {{}}
   */
  this.file_video = undefined;

  /**
   * Duration of video.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * {@link YesNoSid::NO} if video is available in all locations.
   * {@link YesNoSid::YES} if video is available only in certain locations.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_location_select = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Video key from {@link VideoSql}.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_video = undefined;

  /**
   * Name of the command that had been executing when exception occurred.
   *
   * @post post
   * @type {string}
   */
  this.s_command = "";

  /**
   * String representation of video's key.
   *
   * <tt>null</tt> if video does not have thumbnail image.
   *
   * @get result
   * @type {?string}
   */
  this.s_preview_video_key = null;

  /**
   * Thumbnail of video.
   *
   * @post post
   * @type {string}
   */
  this.s_thumbnail = undefined;

  /**
   * Name of the video.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * Url of the video.
   *
   * @get result
   * @type {?string}
   */
  this.url_video = null;

  /**
   * Description of the video.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.xml_description = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_VideoElementModel);

/**
 * @inheritDoc
 */
Wl_Video_VideoElementModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_location": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "a_staff": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "a_video_category": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "dtl_upload": {
        "get": {
          "result": true
        }
      },
      "file_video": {
        "post": {
          "post": true
        }
      },
      "i_duration": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "id_location_select": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "k_business": {
        "delete": {
          "get": true
        },
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "k_video": {
        "delete": {
          "get": true
        },
        "get": {
          "get": true
        },
        "post": {
          "get": true,
          "result": true
        }
      },
      "s_command": {
        "post": {
          "post": true
        }
      },
      "s_preview_video_key": {
        "get": {
          "result": true
        }
      },
      "s_thumbnail": {
        "post": {
          "post": true
        }
      },
      "text_title": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      },
      "url_video": {
        "get": {
          "result": true
        }
      },
      "xml_description": {
        "get": {
          "result": true
        },
        "post": {
          "post": true
        }
      }
    }
  };
};