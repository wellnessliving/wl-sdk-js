/**
 * Removes the tag.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tag_TagModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag_a_asset
   * @property {boolean} is_primary Whether the tag is the primary revenue category for the resource.
   * @property {string} k_id The resource key.
   * @property {string} text_title The resource title.
   */

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag_a_class
   * @property {boolean} is_primary Whether the tag is the primary revenue category for the class.
   * @property {string} k_id The class key.
   * @property {string} text_title The class title.
   */

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag_a_coupon
   * @property {boolean} is_primary Whether the tag is the primary revenue category for the coupon.
   * @property {string} k_id The coupon key.
   * @property {string} text_title The coupon title.
   */

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag_a_promotion
   * @property {boolean} is_primary Whether the tag is the primary revenue category for the promotion.
   * @property {string} k_id The promotion key.
   * @property {string} text_title The promotion title.
   */

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag_a_service
   * @property {boolean} is_primary Whether the tag is the primary revenue category for the service.
   * @property {string} k_id The service key.
   * @property {string} text_title The service title.
   */

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag_a_product
   * @property {boolean} is_primary Whether the tag is the primary revenue category for the product.
   * @property {string} k_id The product key.
   * @property {string} text_title The product title.
   */

  /**
   * @typedef {{}} Wl_Tag_TagModel_a_tag
   * @property {Wl_Tag_TagModel_a_tag_a_asset} a_asset Bookable assets assigned to the tag. Each element has the next structure:
   * @property {Wl_Tag_TagModel_a_tag_a_class} a_class Classes and events assigned to the tag. Each element has the next structure:
   * @property {Wl_Tag_TagModel_a_tag_a_coupon} a_coupon Gift cards assigned to the tag. Each element has the next structure:
   * @property {Wl_Tag_TagModel_a_tag_a_product} a_product Store products assigned to the tag. Each element has the next structure:
   * @property {Wl_Tag_TagModel_a_tag_a_promotion} a_promotion Purchase options (passes and memberships) assigned to the tag. Each element has the next structure:
   * @property {Wl_Tag_TagModel_a_tag_a_service} a_service Appointment types assigned to the tag. Each element has the next structure:
   * @property {number} i_sort The sort order of the tag.
   * @property {string} text_title The tag title.
   */

  /**
   * The revenue categories (tags) of the business.
   *
   * Keys refer to tag keys . Values have the next structure:
   *
   * @get result
   * @type {Wl_Tag_TagModel_a_tag[]}
   */
  this.a_tag = undefined;

  /**
   * The business key of the tags.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The tag key.
   *
   * Required for `delete()`. Optional for `get()`: if specified,
   * only this tag is returned; if not specified, all tags of the business are returned.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_tag = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tag_TagModel);

/**
 * @inheritDoc
 */
Wl_Tag_TagModel.prototype.config=function()
{
  return {"a_field":{"a_tag":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true}},"k_tag":{"delete":{"get":true},"get":{"get":true}}}};
};

/**
 * Removes the tag.
 *
 * Deletes the revenue category from the business. The deletion fails if the tag is currently
 * set as the primary revenue category for any linked asset, class, coupon, promotion, service,
 * or product (promotions that have already been removed are ignored). On success, notifies
 * listeners about the affected linked objects and invalidates the cached tag list of the
 * business.
 *
 * @function
 * @name Wl_Tag_TagModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns revenue categories (tags) of the business.
 *
 * Returns tags along with the bookable assets, classes, coupons, promotions, services, and
 * products assigned to each one.
 *
 * @function
 * @name Wl_Tag_TagModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
