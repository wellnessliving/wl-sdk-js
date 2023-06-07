/**
 * Manages quizzes for the service or the asset and selected purchase option during booking process.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Quiz_QuizModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_service,k_resource,uid,id_purchase_item,k_id";

  /**
   * @typedef {{}} Wl_Appointment_Book_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Whether the quiz is required.
   * @property {string} k_quiz Quiz key. Primary key from {@link \Core\Quiz\QuizSql} table.
   * @property {string} text_title Quiz title.
   */

  /**
   * List of required quizzes. Each element has next structure:<dl>
   *  <dt>bool <var>is_require</var></dt>
   *  <dd>Whether the quiz is required.</dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>Quiz key. Primary key from {@link \Core\Quiz\QuizSql} table.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>Quiz title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = [];

  /**
   * Purchase item ID.
   *
   * @get get
   * @type {?number}
   */
  this.id_purchase_item = null;

  /**
   * Whether need return all quizzes (required and not required).
   *
   * @get get
   * @type {boolean}
   */
  this.is_all = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Promotion key or appointment key. Depends of {@link \Wl\Appointment\Book\Quiz\QuizApi::$id_purchase_item}.
   *
   * @get get
   * @type {?string}
   */
  this.k_id = null;

  /**
   * Resource key.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * Service key.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = null;

  /**
   * User key.
   * Empty if quest.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Quiz_QuizModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Quiz_QuizModel.prototype.config=function()
{
  return {"a_field": {"a_quiz": {"get": {"result": true}},"id_purchase_item": {"get": {"get": true}},"is_all": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Quiz_QuizModel.instanceGet
 * @param {string} k_business Business key.
 * @param {?string} k_service Service key.
 * @param {?string} k_resource Resource key.
 * @param {?string} uid User key. Empty if quest.
 * @param {?number} id_purchase_item Purchase item ID.
 * @param {?string} k_id Promotion key or appointment key. Depends of {@link \Wl\Appointment\Book\Quiz\QuizApi::$id_purchase_item}.
 * @returns {Wl_Appointment_Book_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */