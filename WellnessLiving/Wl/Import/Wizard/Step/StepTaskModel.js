/**
 * Allows to work with additional tasks for the import step.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Import_Wizard_Step_StepTaskModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Count of rows that are left to be imported.
   *
   * @get result
   * @type {number}
   */
  this.i_left = undefined;

  /**
   * Import wizard step. One of {@link \Wl\Import\Wizard\ImportWizardSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_import_wizard = undefined;

  /**
   * Key of the business where import goes. Primary key from {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Import_Wizard_Step_StepTaskModel);

/**
 * @inheritDoc
 */
Wl_Import_Wizard_Step_StepTaskModel.prototype.config=function()
{
  return {"a_field": {"i_left": {"get": {"result": true}},"id_import_wizard": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}}}};
};