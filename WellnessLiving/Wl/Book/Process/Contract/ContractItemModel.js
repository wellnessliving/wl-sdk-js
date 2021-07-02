/**
 * Contract tied to purchase option selected in class/event booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Contract_ContractItemModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_purchase_item,s_wizard_id";

  /**
   * Whether there remains a selected purchase item that grants access to the class.
   *
   * @delete result
   * @type {boolean}
   */
  this.has_valid_purchase = undefined;

  /**
   * HTML-ready text of the contract.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * Type of purchase item, one of {@link \RsPurchaseItemSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * Whether client agrees to the contract.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_agree = undefined;

  /**
   * Id of purchase item within its type (represented by <var>id_purchase_item</var>).
   *
   * @get result
   * @type {string}
   */
  this.k_id = undefined;

  /**
   * Key of purchase option, one of array keys returned by {@link \RsBookProcess::purchase()}.
   *
   * @delete get
   * @get get
   * @put get
   * @type {string}
   */
  this.s_purchase_item = undefined;

  /**
   * User signature produced by {@link \Core\Tool\Signature\Signature} tool.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.s_signature = undefined;

  /**
   * Booking wizard session key.
   *
   * @delete get
   * @get get
   * @put get
   * @type {string}
   */
  this.s_wizard_id = undefined;

  /**
   * Text of the contract signed by the client.
   *
   * @get result
   * @type {string}
   */
  this.text_contract = undefined;

  /**
   * Purchase item title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Contract_ContractItemModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Contract_ContractItemModel.prototype.config=function()
{
  return {"a_field": {"has_valid_purchase": {"delete": {"result": true}},"html_contract": {"get": {"result": true}},"id_purchase_item": {"get": {"result": true}},"is_agree": {"get": {"result": true},"put": {"post": true}},"k_id": {"get": {"result": true}},"s_purchase_item": {"delete": {"get": true},"get": {"get": true},"put": {"get": true}},"s_signature": {"get": {"result": true},"put": {"post": true}},"s_wizard_id": {"delete": {"get": true},"get": {"get": true},"put": {"get": true}},"text_contract": {"get": {"result": true}},"text_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Contract_ContractItemModel.instanceGet
 * @param {string} s_purchase_item Key of purchase option, one of array keys returned by {@link \RsBookProcess::purchase()}.
 * @param {string} s_wizard_id Booking wizard session key.
 * @returns {Wl_Book_Process_Contract_ContractItemModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */