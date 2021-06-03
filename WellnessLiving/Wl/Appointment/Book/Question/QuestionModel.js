/**
 * Manages questions for the current service.
 *
 * This model is generated automatically based on API.
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
   * A list of questions for the current service.
   *
   * @get result
   * @type {{}}
   */
  this.a_question = undefined;

  /**
   * Service key.
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
  return {"a_field": {"a_question": {"get": {"result": true}},"k_service": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Question_QuestionModel.instanceGet
 * @param {string} k_service Service key.
 * @returns {Wl_Appointment_Book_Question_QuestionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */