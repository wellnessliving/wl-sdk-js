/**
 * Gets list of contracts.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Contract_ContractAll_ContractAllModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Profile_Contract_ContractAll_ContractAllModel_a_contract
   * @property {string} dt_agree_local Agreement date in business timezone.
   * @property {string} dt_agree_utc Agreement date in UTC.
   * @property {string} html_contract Contract text.
   * @property {string} html_title Purchase item title.
   * @property {string} ip_agree IP address from which agreement was done.
   * @property {string} k_purchase_item Purchase item key.
   * @property {string} text_title Purchase item title.
   * @property {string} url_signature URL to agreement signature.
   */

  /**
   * List of contacts. Every element has next keys:
   *
   * @get result
   * @type {Wl_Profile_Contract_ContractAll_ContractAllModel_a_contract[]}
   */
  this.a_contract = undefined;

  /**
   * Business to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User to get information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Contract_ContractAll_ContractAllModel);

/**
 * @inheritDoc
 */
Wl_Profile_Contract_ContractAll_ContractAllModel.prototype.config=function()
{
  return {"a_field":{"a_contract":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Contract_ContractAll_ContractAllModel.instanceGet
 * @param {string} k_business Business to get information for.
 * @param {string} uid User to get information for.
 * @returns {Wl_Profile_Contract_ContractAll_ContractAllModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets list of contracts.
 *
 * Returns every contract the user has subscribed to or is required to agree to for the given
 * business, including the agreement date, signature link, and contract text.
 *
 * @function
 * @name Wl_Profile_Contract_ContractAll_ContractAllModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
