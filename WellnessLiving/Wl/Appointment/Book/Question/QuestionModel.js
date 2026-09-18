/**
 * Retrieves questions for a selected service.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Question_QuestionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_service";

  /**
   * The list of answers for questions
   *
   * * Key is a question hash from {@link Wl_Appointment_Book_Question_QuestionModel.a_question}.
   * * Value is the answer text for that question.
   *
   * @post post
   * @type {string[]}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Question_QuestionModel_a_question
   * @property {number} i_size Number of text rows for the answer input. Values greater than 1 indicate a multi-line answer.
   * @property {boolean} is_multiple `true` if `i_size` is greater than 1, `false` otherwise.
   * @property {string} s_key SHA1 hash of the question text, used as a unique identifier for the question.
   * @property {string} s_question Question text.
   */

  /**
   * A list of questions for the service. Each element contains:
   *
   * @get result
   * @type {Wl_Appointment_Book_Question_QuestionModel_a_question[]}
   */
  this.a_question = undefined;

  /**
   * Appointment key to save answers for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * The service key used for retrieving questions.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Question_QuestionModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Question_QuestionModel.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_question": {"get": {"result": true}},"k_appointment": {"get": {"get": true},"post": {"get": true}},"k_service": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Question_QuestionModel.instanceGet
 * @param {string} k_service The service key used for retrieving questions.
 * @returns {Wl_Appointment_Book_Question_QuestionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */