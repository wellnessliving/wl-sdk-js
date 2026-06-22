/**
 * Manages a single quiz.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Quiz_QuizElement72Model} instead.
 */
function Wl_Quiz_QuizElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_quiz,k_quiz_login,uid_client";

  /**
   * Access log data.
   *
   * @get result
   * @type {*}
   */
  this.a_access_log = [];

  /**
   * List of quiz elements.
   *
   * Each element responsible for one quiz question and contains array representation of individual question.
   * Structure of each value depend on type of element and contains public arguments of responsible class element.
   *
   * Order of the elements in array corresponds to order of elements on the form.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_element = [];

  /**
   * Quiz settings. Array representation of {@link Wl_Quiz_QuizElementModel.o_setting}.
   *
   * @get result
   * @post post
   * @put result
   * @type {{}}
   */
  this.a_setting = [];

  /**
   * Whether user has privileges to amend form.
   *
   * @get result
   * @type {boolean}
   */
  this.can_amend = false;

  /**
   * Checks whether unauthorized user should be permitted to operate with form and make a response.
   * In general all quizzes should have users in response but it some cases such as registration process
   *  user might not exist yet, and we need ability to ignore check for user existence.
   * `true` - add possibility load form and accept response for non-registered user, `false` otherwise.
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
   * `true` for request quiz from form builder page, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_builder = false;

  /**
   * `true` if quiz is imported, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_imported = undefined;

  /**
   * Whether form can be edited by franchisee.
   * `true` prevent franchisees from editing this form, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_prevent_franchisee = false;

  /**
   * Whether quiz response received by kiosk or direct mode link.
   *
   * `true` quiz response received by kiosk mode.
   * `false` quiz response received by direct or direct mode.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_simple = false;

  /**
   * List of quiz elements in json format.
   *
   * Order of the element in array corresponds to order of elements on the form.
   *
   * @post post
   * @type {string}
   */
  this.json_element = "";

  /**
   * List of purchase items for which this form is loaded in JSON format.
   *
   * This variable supports two structures:
   *
   * New structure:
   * Each element key has the format `[id_purchase_item]::[k_id]`, where: <dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>The ID of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The item key. This depends on <var>id_purchase_item</var> of this array.</dd>
   * </dl>
   * Each element value has the format:
   * <dl>
   *   <dt>int <var>[i_duration]</var></dt>
   *   <dd>Duration of the purchase option.</dd>
   *   <dt>int <var>[i_payment_period]</var></dt>
   *   <dd>Payment period for the purchase option.</dd>
   *   <dt>int <var>[id_duration]</var></dt>
   *   <dd>Duration type, one of {@link RsDurationTypeSid} constants.</dd>
   * </dl>
   *
   * Old structure:
   * Each element is a string in the format `[id_purchase_item]::[k_id]`.
   *
   * Empty in case when purchase item not specified or form loaded from direct link.
   *
   * @get get
   * @type {string}
   */
  this.json_purchase_item = "";

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
   * Business type key. Used only for forms in the system business.
   *
   * `null` if not initialized.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.k_business_type = null;

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
   * @delete get
   * @get get
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

  /**
   * UID of the client for which quiz requested.
   *
   * @get get
   * @type {string}
   */
  this.uid_client = "";

  /**
   * Direct URL to quiz.
   *
   * @get result
   * @put result
   * @type {string}
   */
  this.url_quiz = undefined;

  /**
   * Kiosk direct URL to quiz.
   *
   * @get result
   * @put result
   * @type {string}
   */
  this.url_quiz_kiosk = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_QuizElementModel);

/**
 * @inheritDoc
 */
Wl_Quiz_QuizElementModel.prototype.config=function()
{
  return {"a_field": {"a_access_log": {"get": {"result": true}},"a_element": {"get": {"result": true},"post": {"post": true}},"a_setting": {"get": {"result": true},"post": {"post": true},"put": {"result": true}},"can_amend": {"get": {"result": true}},"can_anonymous": {"get": {"get": true},"post": {"get": true}},"i_responses": {"get": {"result": true}},"is_active": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"is_builder": {"get": {"get": true}},"is_imported": {"get": {"result": true}},"is_prevent_franchisee": {"get": {"result": true}},"is_simple": {"get": {"get": true},"post": {"get": true}},"json_element": {"post": {"post": true}},"json_purchase_item": {"get": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_business_type": {"get": {"result": true},"post": {"post": true}},"k_quiz": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_quiz_login": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"show_numbering": {"get": {"result": true},"post": {"post": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"uid_client": {"get": {"get": true}},"url_quiz": {"get": {"result": true},"put": {"result": true}},"url_quiz_kiosk": {"get": {"result": true},"put": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Quiz_QuizElementModel.instanceGet
 * @param {string} k_business Business key within which quiz is managed.
 * @param {string} k_quiz Quiz key.
 * @param {string} k_quiz_login Quiz login key.
 * @param {string} uid_client UID of the client for which quiz requested.
 * @returns {Wl_Quiz_QuizElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */