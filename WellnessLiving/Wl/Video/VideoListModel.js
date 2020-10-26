/**
 * Api to return list of videos.

Results of the methods can be viewed in the model.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_VideoListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = 'k_business';

  /**
   * A list of reimbursement refuse.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list = undefined;

  /**
   * List of locations to show videos from.
   *
   * @get get
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * List of shard video keys in order to be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = undefined;

  /**
   * List of staff members to show videos with.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * List of video categories to show videos from.
   *
   * @get get
   * @type {string[]}
   */
  this.a_video_category = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Filter phrase to filter videos by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_VideoListModel);

/**
 * @inheritDoc
 */
Wl_Video_VideoListModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_list": {
        "get": {
          "result": true
        }
      },
      "a_location": {
        "get": {
          "get": true
        }
      },
      "a_order": {
        "put": {
          "post": true
        }
      },
      "a_staff": {
        "get": {
          "get": true
        }
      },
      "a_video_category": {
        "get": {
          "get": true
        }
      },
      "k_business": {
        "get": {
          "get": true
        },
        "put": {
          "get": true
        }
      },
      "text_search": {
        "get": {
          "get": true
        }
      }
    }
  };
};

/**
 * @function
 * @name Wl_Video_VideoListModel.instanceGet
 * @param {string} k_business Business key from {@link \RsBusinessSql}.
 * @returns {Wl_Video_VideoListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
*/