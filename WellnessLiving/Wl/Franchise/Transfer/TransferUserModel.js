/**
 * Gets information about user for transfer.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Franchise_Transfer_TransferUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Full user name.
   *
   * @get result
   * @type {string}
   */
  this.text_name_full = undefined;

  /**
   * Transfer uid key.
   *
   * @get get
   * @type {string}
   */
  this.uid_transfer = undefined;

  /**
   * User photo URL.
   *
   * @get result
   * @type {string}
   */
  this.url_photo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Franchise_Transfer_TransferUserModel);

/**
 * @inheritDoc
 */
Wl_Franchise_Transfer_TransferUserModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"text_name_full": {"get": {"result": true}},"uid_transfer": {"get": {"get": true}},"url_photo": {"get": {"result": true}}}};
};