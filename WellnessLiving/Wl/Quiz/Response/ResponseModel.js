/**
 * Endpoint to work with quiz responses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_Response_ResponseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_quiz_response";

  /**
   * List of quiz questions with responses.
   *
   * @get result
   * @post post
   * @type {{}[]}
   */
  this.a_element = [];

  /**
   * Data for Quick Buy.
   * Structure of this array is described in {@link RsCatalogCart::__construct()}.
   *
   * @post post
   * @type {{}}
   */
  this.a_quick_config = [];

  /**
   * Quiz response key list.
   *
   * @delete get
   * @type {string[]}
   */
  this.a_quiz_response_key = [];

  /**
   * `true` if don't check user authorization, `false` otherwise.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.can_anonymous = false;

  /**
   * Mode type, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Response source. One of {@link Wl_Quiz_Response_SourceSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_source = 0;

  /**
   * `true` if API is being used from backend, `false` otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` if need to save response in draft mode, `false` otherwise.
   *
   * @post post
   * @var {boolean}
   */
  this.is_draft = false;

  /**
   * Whether need skips quiz.
   *
   * @post post
   * @type {boolean}
   */
  this.is_skip = false;

  /**
   * List of quiz questions with responses in JSON format.
   *
   * @post post
   * @type {string}
   */
  this.json_element = "";

  /**
   * Business key within which quiz is managed.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Quiz key.
   *
   * @post get
   * @type {string}
   */
  this.k_quiz = "";

  /**
   * Quiz login key.
   *
   * @post post
   * @type {string}
   */
  this.k_quiz_login = "";

  /**
   * Quiz response key.
   *
   * `null` in a case of response creation or
   * removing set of responses in {@link Core_Quiz_QuizResponseModel.a_quiz_response_key}.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {?string}
   */
  this.k_quiz_response = null;

  /**
   * Whether to show numbering of the form elements that supports numbering.
   *
   * `true` to show numbering on the form for elements that supports numbering.
   * `false` to not show numbering.
   *
   * @get result
   * @type {boolean}
   */
  this.show_numbering = true;

  /**
   * Booking appointment wizard ID.
   * Not `null` if quiz response was sent during booking appointment process.
   *
   * @post post
   * @type {?string}
   */
  this.text_appointment_wizard_id = null;

  /**
   * Booking class wizard ID.
   * Not `null` if quiz response was sent during booking class process.
   *
   * @post post
   * @type {?string}
   */
  this.text_class_wizard_id = null;

  /**
   * Title of the filled form.
   *
   * `null` in case when not filled yet.
   *
   * @get result
   * @type {?string}
   */
  this.text_title = null;

  /**
   * UID of the user who makes response for quiz.
   *
   * @post post
   * @type {?string}
   */
  this.uid_response = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_Response_ResponseModel);

/**
 * @inheritDoc
 */
Wl_Quiz_Response_ResponseModel.prototype.config=function()
{
  return {"a_field": {"a_element": {"get": {"result": true},"post": {"post": true}},"a_quick_config": {"post": {"post": true}},"a_quiz_response_key": {"delete": {"get": true}},"can_anonymous": {"get": {"get": true},"post": {"get": true}},"id_source": {"get": {"result": true},"post": {"post": true}},"id_mode": {"delete": {"get": true}},"is_backend": {"post": {"post": true}},"is_draft": {"post": {"post": true}},"is_skip": {"post": {"post": true}},"json_element": {"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_quiz": {"post": {"get": true}},"k_quiz_login": {"post": {"post": true}},"k_quiz_response": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"show_numbering": {"get": {"result": true}},"text_appointment_wizard_id": {"post": {"post": true}},"text_class_wizard_id": {"post": {"post": true}},"text_title": {"get": {"result": true}},"uid_response": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Quiz_Response_ResponseModel.instanceGet
 * @param {string} k_business Business key within which quiz is managed.
 * @param {?string} k_quiz_response Quiz response key. `null` in a case of response creation or removing set of responses in {@link Core_Quiz_QuizResponseModel.a_quiz_response_key}.
 * @returns {Wl_Quiz_Response_ResponseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */