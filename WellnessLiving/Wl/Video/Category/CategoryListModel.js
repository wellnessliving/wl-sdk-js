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
function Wl_Video_Category_CategoryListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = 'k_business';

  /**
   * List of shard video category keys in order to be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = undefined;

  /**
   * Categories of business video library {@link Wl_Video_Category_CategoryListModel.k_business}.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_video_category = undefined;

  /**
   * <tt>true</tt> if skip group without video, <tt>false</tt> otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_skip_empty_group = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Filter phrase to filter categories by name.
   *
   * @get get
   * @type {string}
   */
  this.text_filter = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Category_CategoryListModel);

/**
 * @inheritDoc
 */
Wl_Video_Category_CategoryListModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_order": {
        "put": {
          "post": true
        }
      },
      "a_video_category": {
        "get": {
          "result": true
        }
      },
      "is_skip_empty_group": {
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
      "text_filter": {
        "get": {
          "get": true
        }
      }
    }
  };
};

/**
 * @function
 * @name Wl_Video_Category_CategoryListModel.instanceGet
 * @param {string} k_business Business key from {@link \RsBusinessSql}.
 * @returns {Wl_Video_Category_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
*/