/**
 * Saves information about watch video.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Watch_WatchModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * String key of the video.
   *
   * @post post
   * @type {string}
   */
  this.k_video = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Watch_WatchModel);

/**
 * @inheritDoc
 */
Wl_Video_Watch_WatchModel.prototype.config=function()
{
  return {
    "a_field": {
      "k_business": {
        "post": {
          "post": true
        }
      },
      "k_video": {
        "post": {
          "post": true
        }
      }
    }
  };
};