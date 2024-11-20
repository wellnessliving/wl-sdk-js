/**
 * An endpoint that manages quizzes for the service, asset, or Purchase Option selected during the booking process.
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
   * @property {boolean} is_require Determines whether the quiz is required.
   * @property {string} k_quiz The quiz key.
   * @property {string} text_title The quiz title.
   */

  /**
   * A list of required quizzes. Each element has the next structure:<dl>
   *  <dt>bool <var>is_require</var></dt>
   *  <dd>Determines whether the quiz is required.</dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>The quiz key.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>The quiz title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = [];

  /**
   * The purchase item ID.
   *
   * @get get
   * @type {?number}
   */
  this.id_purchase_item = null;

  /**
   * Determines whether all quizzes need to be returned (required and not required).
   *
   * @get get
   * @type {boolean}
   */
  this.is_all = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The promotion or appointment key, depending on {@link Wl_Appointment_Book_Quiz_QuizModel.id_purchase_item}.
   *
   * @get get
   * @type {?string}
   */
  this.k_id = null;

  /**
   * The resource key.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * The service key.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = null;

  /**
   * The user key.
   * Empty if this is a guest profile.
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
 * @param {string} k_business The business key.
 * @param {?string} k_service The service key.
 * @param {?string} k_resource The resource key.
 * @param {?string} uid The user key. Empty if this is a guest profile.
 * @param {?number} id_purchase_item The purchase item ID.
 * @param {?string} k_id The promotion or appointment key, depending on {@link Wl_Appointment_Book_Quiz_QuizModel.id_purchase_item}.
 * @returns {Wl_Appointment_Book_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */