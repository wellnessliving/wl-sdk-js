/**
 * Tags API point.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tag_TagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Tag_TagListModel_a_list
   * @property {string} k_tag Tag key. Primary key in the {@link \RsTagSql} table.
   * @property {string} text_title Tag title.
   */

  /**
   * Tag list.
   *
   * Each element has next structure:<dl>
   * <dt>string <var>k_tag</var> </dt>
   * <dd>Tag key. Primary key in the {@link \RsTagSql} table.</dd>
   * <dt>string <var>text_title</var></dt>
   * <dd>Tag title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Tag_TagListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Business key of the tags.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tag_TagListModel);

/**
 * @inheritDoc
 */
Wl_Tag_TagListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Tag_TagListModel.instanceGet
 * @param {string} k_business Business key of the tags.
 * @returns {Wl_Tag_TagListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */