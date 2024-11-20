/**
 * Retrieves information about Business Waiver settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Waiver_BusinessWaiverModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * If {@link Wl_Business_Waiver_BusinessWaiverModel.is_contract_minor} is set, this field contains the age
   * of the minor. Default value is 18.
   *
   * @get result
   * @type {number}
   */
  this.i_contract_minor = 18;

  /**
   * Require clients to agree to the Liability Release only when booking services. `True` means to require. `False` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract_book_only = false;

  /**
   * Clients can sign the waiver on behalf of any minor of age {@link Wl_Business_Waiver_BusinessWaiverModel.i_contract_minor}
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract_minor = false;

  /**
   * Require clients to agree to the Liability Release upon registration. `True` means to require. `False` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract_upon_register = false;

  /**
   * Business Key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Contents of the business waiver.
   *
   * @get result
   * @type {string}
   */
  this.xml_contract = "";

  /**
   * Description of the business waiver.
   *
   * @get result
   * @type {string}
   */
  this.xml_description = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Waiver_BusinessWaiverModel);

/**
 * @inheritDoc
 */
Wl_Business_Waiver_BusinessWaiverModel.prototype.config=function()
{
  return {"a_field": {"i_contract_minor": {"get": {"result": true}},"is_contract_book_only": {"get": {"result": true}},"is_contract_minor": {"get": {"result": true}},"is_contract_upon_register": {"get": {"result": true}},"k_business": {"get": {"get": true}},"xml_contract": {"get": {"result": true}},"xml_description": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_Waiver_BusinessWaiverModel.instanceGet
 * @param {string} k_business Business Key.
 * @returns {Wl_Business_Waiver_BusinessWaiverModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */