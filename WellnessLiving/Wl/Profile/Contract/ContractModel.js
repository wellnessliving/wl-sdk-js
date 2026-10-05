/**
 * Returns contract information for the specified purchase option.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Contract_ContractModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location,id_purchase_item,k_id,k_purchase_item,m_price_custom,s_discount_code";

  /**
   * @typedef {{}} Wl_Profile_Contract_ContractModel_a_config_a_event_list
   * @property {string} k_class Key of the event class.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Profile_Contract_ContractModel_a_config_a_registration_fee_list
   * @property {string} m_amount Registration fee amount for the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Profile_Contract_ContractModel_a_config
   * @property {Wl_Profile_Contract_ContractModel_a_config_a_event_list} a_event_list The tuition class schedule selected for the participant. Each element has the next keys:
   * @property {Wl_Profile_Contract_ContractModel_a_config_a_registration_fee_list} a_registration_fee_list Registration fees to charge together with the tuition, keyed by participant key.  Each value has the next keys:
   */

  /**
   * Additional configuration for the item that might influence contracts.
   *
   * When {@link Wl_Profile_Contract_ContractModel.id_purchase_item} is {@link RsPurchaseItemSid}.
   * Use next structure:
   *
   * @get get
   * @type {Wl_Profile_Contract_ContractModel_a_config}
   */
  this.a_config = undefined;

  /**
   * @typedef {{}} Wl_Profile_Contract_ContractModel_a_contract_list
   * @property {string} html_contract The text of this specific contract.
   * @property {string} uid Key of the visitor this contract applies to.
   */

  /**
   * List of contracts required at once, if the purchase option requires agreement to several
   *  distinct contracts (for example, one per Tuition visitor). Keyed the same way as
   *  `a_signature` used to submit signatures for such a purchase option. Empty if the purchase
   *  option requires at most one contract - use {@link Wl_Profile_Contract_ContractModel.html_contract} instead in
   *  that case. Value has the following structure:
   *
   * @get result
   * @type {Wl_Profile_Contract_ContractModel_a_contract_list}
   */
  this.a_contract_list = undefined;

  /**
   * The start date of the contract.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * The percentage discount for the item.
   *
   * Not supported when the purchase option requires several distinct contracts at once - see
   *  {@link Wl_Profile_Contract_ContractModel.a_contract_list}.
   *
   * @get get
   * @type {number}
   */
  this.f_manual_discount = 0;

  /**
   * The text of the contract.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * Age of minor which documents can be signed by parent or legal guardian.
   *
   * @get result
   * @type {number}
   */
  this.i_minor_age = undefined;

  /**
   * The type of purchase item. This is one of the {@link RsPurchaseItemSid} constants.
   * Optional if {@link Wl_Profile_Contract_ContractModel.k_purchase_item} is not empty.
   *
   * @get get
   * @see RsPurchaseItemSid
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * `false` if user has not agreed to use Electronic Signatures,
   * `true` if user has agreed to use Electronic Signatures,
   * `null` otherwise.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_agree = null;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the purchase item in the database.
   * The item key. Depends on {@link Wl_Profile_Contract_ContractModel.id_purchase_item} property.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * The key of the selected location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of the selected purchase item.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_purchase_item = "";

  /**
   * Amount of a flat manual discount.
   *
   * Not supported when the purchase option requires several distinct contracts at once - see
   *   {@link Wl_Profile_Contract_ContractModel.a_contract_list}.
   *
   * @get get
   * @type {string}
   */
  this.m_discount_flat = "";

  /**
   * The custom price of the item.
   *
   * Not supported when the purchase option requires several distinct contracts at once - see
   *   {@link Wl_Profile_Contract_ContractModel.a_contract_list}.
   *
   * @get get
   * @type {string}
   */
  this.m_price_custom = "";

  /**
   * The discount code used for the item.
   *
   * Not supported when the purchase option requires several distinct contracts at once - see
   *  {@link Wl_Profile_Contract_ContractModel.a_contract_list}.
   *
   * @get get
   * @type {string}
   */
  this.s_discount_code = "";

  /**
   * An encoded version of the client signature.
   * This is different from the signature needed to communicate with an endpoint.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = "";

  /**
   * Title of purchase option.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The key of the current user.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Contract_ContractModel);

/**
 * @inheritDoc
 */
Wl_Profile_Contract_ContractModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"get":{"get":true}},"a_contract_list":{"get":{"result":true}},"dt_start":{"get":{"get":true}},"f_manual_discount":{"get":{"get":true}},"html_contract":{"get":{"result":true}},"i_minor_age":{"get":{"result":true}},"id_purchase_item":{"get":{"get":true}},"is_agree":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_id":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_purchase_item":{"get":{"get":true},"post":{"get":true}},"m_discount_flat":{"get":{"get":true}},"m_price_custom":{"get":{"get":true}},"s_discount_code":{"get":{"get":true}},"s_signature":{"post":{"post":true}},"text_title":{"get":{"result":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Contract_ContractModel.instanceGet
 * @param {string} uid The key of the current user.
 * @param {string} k_business The key of the business to show information for.
 * @param {string} k_location The key of the selected location.
 * @param {number} id_purchase_item The type of purchase item. This is one of the {@link RsPurchaseItemSid} constants. Optional if {@link Wl_Profile_Contract_ContractModel.k_purchase_item} is not empty.
 * @param {string} k_id The key of the purchase item in the database. The item key. Depends on {@link Wl_Profile_Contract_ContractModel.id_purchase_item} property.
 * @param {string} k_purchase_item The key of the selected purchase item.
 * @param {string} m_price_custom The custom price of the item. Not supported when the purchase option requires several distinct contracts at once - see {@link Wl_Profile_Contract_ContractModel.a_contract_list}.
 * @param {string} s_discount_code The discount code used for the item. Not supported when the purchase option requires several distinct contracts at once - see {@link Wl_Profile_Contract_ContractModel.a_contract_list}.
 * @returns {Wl_Profile_Contract_ContractModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns contract information for the specified purchase option.
 *
 * Renders the contract text for the specified purchase option, applying any applicable
 * discounts, and returns the content needed to display the contract acceptance modal to the
 * client. If the purchase option requires agreement to several distinct contracts at once,
 * returns them through {@link Wl_Profile_Contract_ContractModel.a_contract_list} instead, each rendered the same
 * way as a single contract, using the discount already resolved for that specific contract -
 * {@link Wl_Profile_Contract_ContractModel.f_manual_discount}, {@link Wl_Profile_Contract_ContractModel.m_discount_flat}, and
 * {@link Wl_Profile_Contract_ContractModel.s_discount_code} are not supported in that case.
 *
 * @function
 * @name Wl_Profile_Contract_ContractModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Completes a sale of a Purchase Option requiring a contract by submitting the signed contract.
 *
 * Accepts an encoded client signature and agreement flag, decodes the signature, and records
 * the signed contract for the specified purchase item.
 *
 * @function
 * @name Wl_Profile_Contract_ContractModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
