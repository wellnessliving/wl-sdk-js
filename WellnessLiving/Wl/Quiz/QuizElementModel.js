/**
 * Api endpoint to manage single quiz.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_QuizElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_quiz";

  /**
   * List of quiz elements.
   *
   * Order of the element in array corresponds to order of elements on the form.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_element = [];

  /**
   * Quiz settings. Array representation of {@link \Wl\Quiz\QuizElementApi::$o_setting}.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_setting = [];

  /**
   * `true` if don't check user authorization, `false` otherwise.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.can_anonymous = false;

  /**
   * Number of responses for specific quiz.
   *
   * @get result
   * @type {number}
   */
  this.i_responses = 0;

  /**
   * Quiz active status.
   *
   * `true` if quiz is active.
   * `false` if quiz is not active.
   *
   * @get result
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_active = true;

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
   * @delete get
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_quiz = "";

  /**
   * Quiz login key.
   *
   * @post get
   * @put get
   * @type {string}
   */
  this.k_quiz_login = "";

  /**
   * Whether to show numbering of the form elements that supports numbering.
   *
   * `true` to show numbering on the form for elements that supports numbering.
   * `false` to not show numbering.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.show_numbering = true;

  /**
   * Quiz form title.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_QuizElementModel);

/**
 * @inheritDoc
 */
Wl_Quiz_QuizElementModel.prototype.config=function()
{
  return {"a_field": {"a_element": {"get": {"result": true},"post": {"post": true}},"a_setting": {"get": {"result": true},"post": {"post": true}},"can_anonymous": {"get": {"get": true},"post": {"get": true}},"i_responses": {"get": {"result": true}},"is_active": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_quiz": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_quiz_login": {"post": {"get": true},"put": {"get": true}},"show_numbering": {"get": {"result": true},"post": {"post": true}},"text_title": {"get": {"result": true},"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Quiz_QuizElementModel.instanceGet
 * @param {string} k_business Business key within which quiz is managed.
 * @param {string} k_quiz Quiz key.
 * @returns {Wl_Quiz_QuizElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */