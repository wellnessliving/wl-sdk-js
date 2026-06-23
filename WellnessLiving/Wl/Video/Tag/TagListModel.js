/**
 * Returns the list of video tags for the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Tag_TagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Video_Tag_TagListModel_a_tag_list
   * @property {string} k_video_tag The video tag key.
   * @property {string} text_title The video tag title.
   */

  /**
   * A list of video tags with the following structure:
   *
   * @get result
   * @type {Wl_Video_Tag_TagListModel_a_tag_list[]}
   */
  this.a_tag_list = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Tag_TagListModel);

/**
 * @inheritDoc
 */
Wl_Video_Tag_TagListModel.prototype.config=function()
{
  return {"a_field":{"a_tag_list":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Video_Tag_TagListModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Video_Tag_TagListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of video tags for the business.
 *
 * Returns all content tags configured for the business video library. Used to populate
 * tag pickers when creating or editing videos. Requires an active video subscription.
 *
 * @function
 * @name Wl_Video_Tag_TagListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
