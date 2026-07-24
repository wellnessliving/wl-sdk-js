/**
 * Returns list of search tags.
 * This is public information and method does not require any level of privileges.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Search_Tag_SearchTagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Search_Tag_SearchTagListModel_a_search_tag
   * @property {number} id_business_category The business category that can use this search tag. One of the {@link RsBusinessCategorySid} constants. This can be found in the business information found in {@link Wl_Business_DataModel.id_category}.
   * @property {string} k_search_tag The key of the tag. The primary key in the table of tags.
   * @property {string} text_title The name of the tag.
   */

  /**
   * A list of all the search tags.
   *
   * Each element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Search_Tag_SearchTagListModel_a_search_tag[]}
   */
  this.a_search_tag = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Search_Tag_SearchTagListModel);

/**
 * @inheritDoc
 */
Wl_Search_Tag_SearchTagListModel.prototype.config=function()
{
  return {"a_field":{"a_search_tag":{"get":{"result":true}}}};
};

/**
 * Returns list of search tags.
This is public information and method does not require any level of privileges.
 *
 * Returns the complete list of system-wide search tags used for filtering businesses and
 * services in directory searches. No authentication or input parameters are required.
 *
 * @function
 * @name Wl_Search_Tag_SearchTagListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
