/**
 * List of contracts tied to selected purchase options in class/event booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Contract_ContractListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_wizard_id";

  /**
   * @typedef {{}} Wl_Book_Process_Contract_ContractListModel_a_contract_list
   * @property {boolean} is_agree Whether client already agreed to this contract.
   * @property {string} s_purchase_item Key of purchase option, one of array keys returned by {@link \RsBookProcess::purchase()}.
   * @property {string} s_signature Client's signature, if this contract has already been signed.
   */

  /**
   * List of purchase options with contracts. Value has following structure:
   * <dl>
   *   <dt>
   *     bool <var>is_agree</var>
   *   </dt>
   *   <dd>
   *     Whether client already agreed to this contract.
   *   </dd>
   *   <dt>
   *     string <var>s_purchase_item</var>
   *   </dt>
   *   <dd>
   *     Key of purchase option, one of array keys returned by {@link \RsBookProcess::purchase()}.
   *   </dd>
   *   <dt>
   *     string <var>s_signature</var>
   *   </dt>
   *   <dd>
   *     Client's signature, if this contract has already been signed.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Contract_ContractListModel_a_contract_list}
   */
  this.a_contract_list = undefined;

  /**
   * Whether contracts should be skipped.
   *
   * @get result
   * @put result,post
   * @type {boolean}
   */
  this.is_contract_skip = undefined;

  /**
   * Booking wizard session key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.s_wizard_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Contract_ContractListModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Contract_ContractListModel.prototype.config=function()
{
  return {"a_field": {"a_contract_list": {"get": {"result": true}},"is_contract_skip": {"get": {"result": true},"put": {"result": true,"post": true}},"s_wizard_id": {"get": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Contract_ContractListModel.instanceGet
 * @param {string} s_wizard_id Booking wizard session key.
 * @returns {Wl_Book_Process_Contract_ContractListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */