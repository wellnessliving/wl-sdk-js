/**
 * Performs ajax requests for verify client's progress log.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Log_VerifyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Date without time of the progress log.
   *
   * @put get
   * @type {string}
   */
  this.dt_date = undefined;

  /**
   * Business key.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   *
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_VerifyModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_VerifyModel.prototype.config=function()
{
  return {"a_field": {"dt_date": {"put": {"get": true}},"k_business": {"put": {"get": true}},"uid": {"put": {"get": true}}}};
};