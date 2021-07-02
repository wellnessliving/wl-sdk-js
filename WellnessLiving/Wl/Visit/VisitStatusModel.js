/**
 * Visit status processing.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_VisitStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_visit,k_business";

  /**
   * Visit status. One of {@link \Wl\Visit\VisitSid} constants.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.id_visit = "0";

  /**
   * ID of business. Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Visit ID to get status for. Primary key in {@link \RsVisitSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_VisitStatusModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitStatusModel.prototype.config=function()
{
  return {"a_field": {"id_visit": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_visit": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Visit_VisitStatusModel.instanceGet
 * @param {string} k_visit Visit ID to get status for. Primary key in {@link \RsVisitSql} table.
 * @param {string} k_business ID of business. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Visit_VisitStatusModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */