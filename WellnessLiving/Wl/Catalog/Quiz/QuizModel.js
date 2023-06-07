/**
 * Manages quizzes for the selected purchase options.
 *
 * This model is generated automatically based on API.
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
   * List of purchase items. Each element has format <tt>[id_purchase_item]::[k_id]</tt>, where<dl>
   *  <dt>int <var>id_purchase_item</var></dt>
   *  <dd>ID of the purchase item.</dd>
   *  <dt>string <var>k_id</var></dt>
   *  <dd>Key of the item. Depends on <var>id_purchase_item</var> of this array.</dd>
   * </dl>
   *
   * Empty if no purchases are made for booking.
   *
   * @get get
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * @typedef {{}} Wl_Catalog_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Whether the quiz is required and can not be skipped.
   * @property {string} k_quiz Quiz key.
   * @property {string} text_title Quiz title.
   */

  /**
   * List of quizzes. Each element has next structure:<dl>
   *  <dt>bool <var>is_require</var></dt>
   *  <dd>Whether the quiz is required and can not be skipped.</dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>Quiz key.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>Quiz title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = [];

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
  return {"a_field": {"a_purchase_item": {"get": {"get": true}},"a_quiz": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Quiz_QuizModel.instanceGet
 * @param {string} k_business Key of a business.
 * @param {?string} uid Key of a user who is making a purchase. `null` in case when quizzes requested for guest.
 * @param {string[]} a_purchase_item List of purchase items. Each element has format <tt>[id_purchase_item]::[k_id]</tt>, where<dl> <dt>int <var>id_purchase_item</var></dt> <dd>ID of the purchase item.</dd> <dt>string <var>k_id</var></dt> <dd>Key of the item. Depends on <var>id_purchase_item</var> of this array.</dd> </dl> Empty if no purchases are made for booking.
 * @returns {Wl_Catalog_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */