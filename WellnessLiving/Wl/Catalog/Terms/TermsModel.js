/**
 * Performs {@link Wl_Catalog_Terms_TermsModel.id_terms_action} for every item of {@link Wl_Catalog_Terms_TermsModel.a_item}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Terms_TermsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Terms_TermsModel_a_item
   * @property {number} id_purchase_item Purchase item ID, one of {@link RsPurchaseItemSid} constants.
   * @property {string} k_id Product ID.
   * @property {string} s_item_key Cart item key.
   */

  /**
   * Cart items to apply the action to. Every element has next fields:
   *
   * @post post
   * @type {Wl_Catalog_Terms_TermsModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * Data for Quick Buy.
   *
   * Structure of this array is described in RsCatalogCart::__construct().
   *
   * @post post
   * @type {*[]}
   */
  this.a_quick_config = undefined;

  /**
   * From where request comes. One of {@link RsPlaceSid}.
   *
   * @post get
   * @see RsPlaceSid
   * @type {number}
   */
  this.id_place = 0;

  /**
   * Action to perform. One of {@link Wl_Catalog_Terms_TermsActionSid}.
   *
   * @post post
   * @see Wl_Catalog_Terms_TermsActionSid
   * @type {number}
   */
  this.id_terms_action = 0;

  /**
   * Business the cart belongs to.
   *
   * Primary key in RsBusinessSql table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Link to the catalog list. Set only if the cart became empty after
   * {@link Wl_Catalog_Terms_TermsActionSid}, an empty string otherwise.
   *
   * @post result
   * @type {string}
   */
  this.url_list = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Terms_TermsModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Terms_TermsModel.prototype.config=function()
{
  return {"a_field":{"a_item":{"post":{"post":true}},"a_quick_config":{"post":{"post":true}},"id_place":{"post":{"get":true}},"id_terms_action":{"post":{"post":true}},"k_business":{"post":{"post":true}},"url_list":{"post":{"result":true}}}};
};

/**
 * Performs {@link Wl_Catalog_Terms_TermsModel.id_terms_action} for every item of {@link Wl_Catalog_Terms_TermsModel.a_item}.
 *
 * @function
 * @name Wl_Catalog_Terms_TermsModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
