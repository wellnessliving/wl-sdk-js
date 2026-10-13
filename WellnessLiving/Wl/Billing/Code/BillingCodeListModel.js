/**
 * Gets the billing code list of the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Billing_Code_BillingCodeListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Billing_Code_BillingCodeListModel_a_code
   * @property {string[]} a_service List of services the code is applied to by default. Always empty for a system code: system codes are not applied to services by default.
   * @property {boolean} is_custom `true` for a custom code of the business, `false` for a system code of the ICD-10-CM reference library.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {string} text_description Description of the code. The business typed it in for a custom code. For a system code it comes from the reference library, in the language of the request.
   */

  /**
   * Billing codes of the business.
   *
   * Contains the custom codes of the business and the system codes of the ICD-10-CM reference library, which are
   * shared by all businesses. The system codes are returned only if the business has turned on ICD diagnostic
   * codes .
   *
   * Removed codes are not returned - they are not offered for selection anymore, they only stay on the receipts
   * and invoices they have already been applied to.
   *
   * The custom codes go first, then the system codes. Only the codes that match
   * {@link Wl_Billing_Code_BillingCodeListModel.text_search} are returned, if it is given, and then each group is ranked by the
   * search, the best match first: the code value equal to the search, the code value beginning with it, the
   * description equal to it, the description beginning with it, the rest. Without a search each group is sorted by
   * the code value.
   *
   * The list is a page of the codes: {@link Wl_Billing_Code_BillingCodeListModel.i_limit} of them from the page
   * {@link Wl_Billing_Code_BillingCodeListModel.i_page}, out of the {@link Wl_Billing_Code_BillingCodeListModel.i_count} codes that answer the
   * request.
   *
   * @get result
   * @type {Wl_Billing_Code_BillingCodeListModel_a_code[]}
   */
  this.a_code = undefined;

  /**
   * @typedef {{}} Wl_Billing_Code_BillingCodeListModel_a_code_similar
   * @property {string[]} a_service List of services the code is applied to by default. Always empty for a system code: system codes are not applied to services by default.
   * @property {boolean} is_custom `true` for a custom code of the business, `false` for a system code of the ICD-10-CM reference library.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {string} text_description Description of the code. The business typed it in for a custom code. For a system code it comes from the reference library, in the language of the request.
   */

  /**
   * Up to `SIMILAR_MAX` codes nearest to the search, the nearest first.
   *
   * Filled only when {@link Wl_Billing_Code_BillingCodeListModel.text_search} is given and has found nothing, so that a client may
   * offer something instead of an empty list: the words of the search are matched by their first characters, and
   * one word matching is enough, so a word that is mistyped or cut short at its end still finds a code. Empty
   * while the search has found codes, while it is not given, or while nothing in the list comes close to it.
   *
   * The rows are the same as the rows of {@link Wl_Billing_Code_BillingCodeListModel.a_code}.
   *
   * @get result
   * @type {Wl_Billing_Code_BillingCodeListModel_a_code_similar[]}
   */
  this.a_code_similar = undefined;

  /**
   * Number of the codes that answer the request, the page not applied.
   *
   * A client knows by it how many pages the list has, see {@link Wl_Billing_Code_BillingCodeListModel.i_limit} and
   * {@link Wl_Billing_Code_BillingCodeListModel.i_page}. `0` while nothing answers the request.
   *
   * @get result
   * @type {number}
   */
  this.i_count = undefined;

  /**
   * Number of the codes to return: the size of a page of the list.
   *
   * Not more than `LIMIT_MAX`, and
   * `LIMIT_DEFAULT` while it is not given.
   *
   * @get get
   * @type {number}
   */
  this.i_limit = 50;

  /**
   * Number of the page of the list to return, `1` for the first one.
   *
   * A page holds {@link Wl_Billing_Code_BillingCodeListModel.i_limit} codes, so the page number 2 is the codes from the 51st to
   * the 100th while the limit is the default one. A page beyond the end of the list is empty, while
   * {@link Wl_Billing_Code_BillingCodeListModel.i_count} still tells how many codes answer the request.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 1;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Text to search for, in any case: the value of a code, a part of a description, or plain words. Empty string to
   * get the whole list.
   *
   * The search is split into words, and a code is returned while every word of the search occurs in its value or
   * in its description. So the words may come in any order, and `pain in left shoulder` finds the diagnostic code
   * `M25.512 Pain in left shoulder`. A search of a single word matches a part of a value or of a description as it
   * is: `99` matches `99213`. The case does not matter. A longer text than a description can not match anything,
   * so it is not accepted.
   *
   * A search that has found nothing gets the nearest codes in
   * {@link Wl_Billing_Code_BillingCodeListModel.a_code_similar} instead.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Code_BillingCodeListModel);

/**
 * @inheritDoc
 */
Wl_Billing_Code_BillingCodeListModel.prototype.config=function()
{
  return {"a_field":{"a_code":{"get":{"result":true}},"a_code_similar":{"get":{"result":true}},"i_count":{"get":{"result":true}},"i_limit":{"get":{"get":true}},"i_page":{"get":{"get":true}},"k_business":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Billing_Code_BillingCodeListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Billing_Code_BillingCodeListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets the billing code list of the business.
 *
 * The list contains the custom codes of the business and the diagnostic codes of the read-only ICD-10-CM
 * reference library, the descriptions of the latter in the language of the request. The diagnostic codes are
 * returned only if the business has turned on ICD diagnostic codes. A search ranks the codes it has found, and a
 * search that has found nothing gets the nearest codes instead. The answer is one page of the codes.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
