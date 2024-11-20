/**
 * An endpoint that returns a list of all existing search tags in the system.
 *
 * Search tags can be used for quick searches between businesses and services (mainly in the directories).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Search_Tag_SearchTagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Search_Tag_SearchTagListModel_a_search_tag
   * @property {number} id_business_category The business category that can use this search tag.
   * One of the {@link RsBusinessCategorySid} constants.
   * This can be found in the business information found in {@link Wl_Business_DataModel.id_category}.
   * @property {string} k_search_tag The key of the tag. The primary key in the table of tags.
   * @property {string} text_title The name of the tag.
   */

  /**
   * A list of all the search tags.
   *
   * Each element is an array with the following keys:
   * <dl>
   *   <dt>int <var>id_business_category</var></dt>
   *   <dd>
   *     The business category that can use this search tag.
   *     One of the {@link RsBusinessCategorySid} constants.
   *     This can be found in the business information found in {@link Wl_Business_DataModel.id_category}.
   *   </dd>
   *   <dt>string <var>k_search_tag</var></dt>
   *   <dd>The key of the tag. The primary key in the table of tags.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The name of the tag.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Search_Tag_SearchTagListModel_a_search_tag[]}
   */
  this.a_search_tag = [];

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Search_Tag_SearchTagListModel);

/**
 * @inheritDoc
 */
Wl_Search_Tag_SearchTagListModel.prototype.config=function()
{
  return {"a_field": {"a_search_tag": {"get": {"result": true}}}};
};