/**
 * Allows to get information about custom import.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Import_Custom_Upload_CustomUploadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Count of the rows that are left to be imported.
   *
   * @get result
   * @type {number}
   */
  this.i_left = undefined;

  /**
   * Type of custom import. One of {@link \Wl\Import\Custom\CustomSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_import_custom = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Import_Custom_Upload_CustomUploadModel);

/**
 * @inheritDoc
 */
Wl_Import_Custom_Upload_CustomUploadModel.prototype.config=function()
{
  return {"a_field": {"i_left": {"get": {"result": true}},"id_import_custom": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};