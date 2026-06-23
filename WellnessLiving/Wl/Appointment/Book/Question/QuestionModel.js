/**
 * Retrieves questions for the current service.
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
   * The service key used for retrieving questions.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Question_QuestionModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Question_QuestionModel.prototype.config=function()
{
  return {"a_field":{"a_question":{"get":{"result":true}},"k_service":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Question_QuestionModel.instanceGet
 * @param {string} k_service The service key used for retrieving questions.
 * @returns {Wl_Appointment_Book_Question_QuestionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves questions for the current service.
 *
 * Returns the list of intake questions defined for the specified service that the client must
 * answer before completing an appointment booking. Each question includes its text, a stable
 * hash key for matching answers, and input size metadata.
 *
 * @function
 * @name Wl_Appointment_Book_Question_QuestionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
