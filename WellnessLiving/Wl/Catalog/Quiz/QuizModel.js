/**
 * Gets quizzes for the selected purchase options.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Quiz_QuizModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,a_purchase_item";

  /**
   * @typedef {{}} Wl_Catalog_Quiz_QuizModel_a_purchase_item
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id Key of the item. Depends on `id_purchase_item` of this array.
   */

  /**
   * List of purchase items. Each element has format `[id_purchase_item]::[k_id]`, where
   *
   * Empty if no purchases are made for booking.
   *
   * @get get
   * @type {Wl_Catalog_Quiz_QuizModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Whether the quiz is required and can not be skipped.
   * @property {string} k_quiz Quiz key.
   * @property {string} text_title Quiz title.
   */

  /**
   * List of quizzes. Each element has next structure:
   *
   * @get result
   * @type {Wl_Catalog_Quiz_QuizModel_a_quiz}
   */
  this.a_quiz = undefined;

  /**
   * Key of a business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of a user who is making a purchase.
   *
   * `null` in case when quizzes requested for guest.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Quiz_QuizModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Quiz_QuizModel.prototype.config=function()
{
  return {"a_field":{"a_purchase_item":{"get":{"get":true}},"a_quiz":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Quiz_QuizModel.instanceGet
 * @param {string} k_business Key of a business.
 * @param {?string} uid Key of a user who is making a purchase. `null` in case when quizzes requested for guest.
 * @param {Wl_Catalog_Quiz_QuizModel_a_purchase_item[]} a_purchase_item List of purchase items. Each element has format `[id_purchase_item]::[k_id]`, where Empty if no purchases are made for booking.
 * @returns {Wl_Catalog_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets quizzes for the selected purchase options.
 *
 * Resolves the quizzes required or available for the services behind the given purchase items,
 * taking into account quizzes already completed by the specified user, and returns them so the
 * client can collect answers before booking is finished.
 *
 * @function
 * @name Wl_Catalog_Quiz_QuizModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
