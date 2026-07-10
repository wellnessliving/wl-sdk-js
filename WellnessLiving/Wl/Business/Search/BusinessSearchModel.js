/**
 * Searches for businesses by name and returns matching business keys.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Search_BusinessSearchModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Array with business keys that contain given name in their title.
   *
   * @get result
   * @type {string[]}
   */
  this.a_result = undefined;

  /**
   * If `true`, the return only active customers, `false` - all business.
   *
   * @get get
   * @type {boolean}
   */
  this.is_customer = true;

  /**
   * If `true`, returns only active customer businesses, if `false`, returns all businesses.
   *
   * @get get
   * @type {boolean}
   */
  this.is_strict = false;

  /**
   * Given business name to search by.
   *
   * @get get
   * @type {string}
   */
  this.text_name = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Search_BusinessSearchModel);

/**
 * @inheritDoc
 */
Wl_Business_Search_BusinessSearchModel.prototype.config=function()
{
  return {"a_field":{"a_result":{"get":{"result":true}},"is_customer":{"get":{"get":true}},"is_strict":{"get":{"get":true}},"text_name":{"get":{"get":true}}}};
};

/**
 * Searches for businesses by name and returns matching business keys.
 *
 * Used in internal tools and admin pages to find a business by name or key when only partial information
 * is known. Protected by a captcha to prevent automated enumeration. In strict mode, the title must
 * match exactly; otherwise partial word matches are returned sorted by relevance.
 *
 * @function
 * @name Wl_Business_Search_BusinessSearchModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
