/**
 * Returns the categories of classes and of events of a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Category_CategoryListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Classes_Category_CategoryListModel_a_category
   * @property {number} i_order Position of the category in the list of its kind, from `1`.
   * @property {boolean} is_event `true` for a category of events, `false` for a category of classes.
   * @property {string} k_classes_category Key of the category.
   * @property {string} text_title Name of the category in the language of the request, or in the nearest language that has one.
   */

  /**
   * The categories of the business: first the categories of classes, then the categories of events, each kind in the
   * order that the business set. Each element:
   *
   * @get result
   * @type {Wl_Classes_Category_CategoryListModel_a_category[]}
   */
  this.a_category = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Category_CategoryListModel);

/**
 * @inheritDoc
 */
Wl_Classes_Category_CategoryListModel.prototype.config=function()
{
  return {"a_field":{"a_category":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Classes_Category_CategoryListModel.instanceGet
 * @param {string} k_business Key of the business.
 * @returns {Wl_Classes_Category_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the categories of classes and of events of a business.
 *
 * Every class and every event of a business belongs to one of its categories. Classes and events have separate
 * lists of categories: `is_event` tells the kind of each category. The list has no counts and no other settings
 * of the setup page.
 *
 * @function
 * @name Wl_Classes_Category_CategoryListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
