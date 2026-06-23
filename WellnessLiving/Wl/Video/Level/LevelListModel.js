/**
 * Returns the list of video levels for the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Level_LevelListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Video_Level_LevelListModel_a_level_list
   * @property {string} k_video_level The video level key.
   * @property {string} text_title The video level title.
   */

  /**
   * A list of video levels with the following structure:
   *
   * @get result
   * @type {Wl_Video_Level_LevelListModel_a_level_list[]}
   */
  this.a_level_list = undefined;

  /**
   * A list of video level keys in the order to be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = undefined;

  /**
   * The business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Level_LevelListModel);

/**
 * @inheritDoc
 */
Wl_Video_Level_LevelListModel.prototype.config=function()
{
  return {"a_field":{"a_level_list":{"get":{"result":true}},"a_order":{"put":{"post":true}},"k_business":{"get":{"get":true},"put":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Video_Level_LevelListModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Video_Level_LevelListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of video levels for the business.
 *
 * Returns all difficulty levels configured for the business video library, sorted by their
 * current display order. Used to populate level pickers when creating or editing videos.
 *
 * @function
 * @name Wl_Video_Level_LevelListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates the order of video levels.
 *
 * Reorders the difficulty levels for the business video library according to the provided list.
 * Requires backend access with the video library management privilege.
 *
 * @function
 * @name Wl_Video_Level_LevelListModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
