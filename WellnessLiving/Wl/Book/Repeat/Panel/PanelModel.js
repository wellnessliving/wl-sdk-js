/**
 * Cancel form panel template settings API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Repeat_Panel_PanelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Output HTML content.
   *
   * @get result
   * @type {string}
   */
  this.html_content = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Visit key. Primary key in {@link \RsVisitSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * User key. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Repeat_Panel_PanelModel);

/**
 * @inheritDoc
 */
Wl_Book_Repeat_Panel_PanelModel.prototype.config=function()
{
  return {"a_field": {"html_content": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_visit": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};