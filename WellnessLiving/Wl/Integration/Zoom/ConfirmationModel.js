/**
 * API class to handle request to confirm paid account connection.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Zoom_ConfirmationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Zoom_ConfirmationModel);

/**
 * @inheritDoc
 */
Wl_Integration_Zoom_ConfirmationModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}}}};
};