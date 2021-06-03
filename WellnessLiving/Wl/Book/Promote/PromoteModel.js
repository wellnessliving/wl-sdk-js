/**
 * Book promote processing.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Promote_PromoteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of business. Primary key in {@link RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Visit ID to promote. Primary key in {@link \RsVisitSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * Message about successful promote.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Promote_PromoteModel);

/**
 * @inheritDoc
 */
Wl_Book_Promote_PromoteModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"k_visit": {"post": {"post": true}},"text_message": {"post": {"result": true}}}};
};