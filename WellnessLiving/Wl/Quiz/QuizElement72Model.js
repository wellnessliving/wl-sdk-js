/**
 * Manages a single quiz.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_QuizElement72Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_quiz,k_quiz_login,uid_client,json_purchase_item";

  /**
   * @typedef {{}} Wl_Quiz_QuizElement72Model_a_access_log
   * @property {string} dtu_activity Date and time of the quiz changes.
   * @property {string} uid_actor User's key.
   * @property {number} id_activity One of {@link Wl_Quiz_Activity_ActivitySid} constants.
   * @property {string} text_activity Title of the activity
   * @property {string} text_date Date and time of the quiz changes in appropriate format string for further render.
   * @property {string} text_actor Full name of the user who made an activity.
   * @property {string} url_actor Url for view information about the user who made activity (admin, staff, client).
   */

  /**
   * Access log data.
   *
   * @get result
   * @type {Wl_Quiz_QuizElement72Model_a_access_log[]}
   */
  this.a_access_log = [];

  /**
   * @typedef {{}} Wl_Quiz_QuizElement72Model_a_element_a_amendment_a_change
   * @property {string} text_note Change note.
   */
  /**
   * @typedef {{}} Wl_Quiz_QuizElement72Model_a_element_a_amendment
   * @property {Wl_Quiz_QuizElement72Model_a_element_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */
  /**
   * @typedef {{}} Wl_Quiz_QuizElement72Model_a_element
   * @property {Wl_Quiz_QuizElement72Model_a_element_a_amendment[]} a_amendment List of amendments.
   * Each element has next structure:
   * @property {number[]} a_answer Answer array for selected question options.
   * @property {string[]} a_list Array for a dropdown question's options.
   * @property {string} html_description Additional string for detail description of the question.
   * @property {string} html_question Main html of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   *
   * Defined automatically according to the name of the class.
   * @property {boolean} is_multiple Answer can have multiple options selected.
   * @property {boolean} is_require
   * @property {?string} [k_quiz_element] Quiz element key.
   *
   * `null` in a case if element is not saved in database.
   * @property {?string} k_quiz_element_old Old quiz element key.
   *
   * `null` in a case if element is not has old version.
   * @property {string} text_description Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   *
   * `null` if no notes considered.
   * @property {string} text_question Main text of the input question.
   * @property {string} xml_description Additional XML for detail description of the question.
   * @property {string} xml_question Main XML of the input question.
   */

  /**
   * List of quiz elements.
   *
   * Each element responsible for one quiz element and structure of each value depend
   * on type of element and contains public arguments of responsible class element.
   *
   * Order of the elements in array corresponds to order of elements on the form.
   *
   * @get result
   * @post post
   * @type {Wl_Quiz_QuizElement72Model_a_element[]}
   */
  this.a_element = [];

  /**
   * @typedef {{}} Wl_Quiz_QuizElement72Model_a_setting
   * @property {string[]} a_notify_additional List of additional email addresses which should receive email notification after quiz is submitted.
   *
   * Considered only if {@link \Wl\Quiz\QuizSetting::$is_notify_additional} is `true`.
   * @property {string[][]} a_service List of services grouped by service ID.
   *
   * Key is service ID. One of {@link Wl_Quiz_Service_ServiceSid} constants.
   * Values is list of services.
   * @property {boolean} hide_frontend Whether completed forms should be hidden for client in frontend.
   * @property {number|string} i_notify_automated Number of periods email reminders should be sent for incomplete forms after. Type of a period is specified by
   *   {@link \Wl\Quiz\QuizSetting::$id_notify_automated}.
   *
   *
   * @property {number} id_book_request_type Whether response is required every time they book service.
   *
   * Considered only if {@link \Wl\Quiz\QuizSetting::$is_book} is `true`.
   * @property {number} id_notify_automated Time interval ID. One of {@link ADurationSid} constants.
   * @property {number} id_purchase_request_type Whether response is required every time they purchase service.
   *
   * Considered only if {@link \Wl\Quiz\QuizSetting::$is_purchase} is `true`.
   * @property {boolean} is_amend_support Whether form support amending responses.
   * @property {boolean} is_book Whether quiz is required during/after book service selected in {@link \Wl\Quiz\QuizSetting::$a_service} list.
   * * Related to options:
   * * * {@link \Wl\Quiz\QuizSetting::$is_service_all}
   * * * {@link \Wl\Quiz\QuizSetting::$is_book_before}
   * * * {@link \Wl\Quiz\QuizSetting::$id_book_request_type}
   * @property {boolean} is_book_before Whether quiz is required during booking process.
   *
   * Considered only if {@link \Wl\Quiz\QuizSetting::$is_book} is `true`.
   * @property {boolean} is_internal Whether form can be required for clients.
   * Internal forms can be only added to client profiles or filled by direct link,
   *  but they don't prevent clients to perform any actions until form filled.
   *  `true` if form can be visible to clients
   *  `false` otherwise
   * @property {boolean} is_notify_additional Whether email notification should be sent to specific email addresses after quiz is submitted.
   *
   * List of email addresses stored in {@link \Wl\Quiz\QuizSetting::$a_notify_additional}.
   * @property {boolean} is_notify_automated Whether email reminders should be sent for incomplete forms.
   * @property {boolean} is_notify_client Whether email notification should be sent to client after quiz submitted.
   * @property {boolean} is_notify_staff Whether email notification should be sent to staff members after quiz is submitted.
   * @property {boolean} is_prevent_franchisee Whether form can be edited by franchisee.
   * `true` prevent franchisees from editing this form, `false` - otherwise.
   * @property {boolean} is_private Whether form can be viewed by staff member only after confirmation.
   * `true` if form can be viewed only after confirmation
   * `false` if form can be viewed always
   * @property {boolean} is_purchase Whether quiz is required during/after purchase service selected in {@link \Wl\Quiz\QuizSetting::$a_service} list.
   * Related to options:
   * * {@link \Wl\Quiz\QuizSetting::$is_purchase_all}
   * * {@link \Wl\Quiz\QuizSetting::$is_purchase_before}
   * * {@link \Wl\Quiz\QuizSetting::$id_purchase_request_type}
   * @property {boolean} is_purchase_all Whether all services for purchase should be added in {@link \Wl\Quiz\QuizSetting::$a_service}.
   * @property {boolean} is_purchase_before Whether quiz is required during purchase process.
   *
   * Considered only if {@link \Wl\Quiz\QuizSetting::$is_purchase} is `true`.
   * @property {boolean} is_register_after Whether quiz is required after registration process.
   * @property {boolean} is_register_before Whether quiz is required during registration process.
   *
   * Considered only if {@link \Wl\Quiz\QuizSetting::$is_register_after} is `true`.
   * @property {boolean} is_require_user Whether client should be redirected to sign-in page before completing the form.
   * @property {boolean} is_service_all Whether all services for booking should be added in {@link \Wl\Quiz\QuizSetting::$a_service}.
   */

  /**
   * Quiz settings.
   *
   *
   * @get result
   * @post post
   * @put result
   * @type {Wl_Quiz_QuizElement72Model_a_setting}
   */
  this.a_setting = {};

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
   * Each element key has the format `[id_purchase_item]::[k_id]`, where:
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
   * Secret key of the quiz request given in {@link Wl_Quiz_QuizElement72Model.k_quiz_login}.
   *
   * Required when the quiz request is opened by a user who is not signed in, empty otherwise.
   *
   * @get get
   * @type {string}
   */
  this.s_secret = "";

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

WlSdk_ModelAbstract.extend(Wl_Quiz_QuizElement72Model);

/**
 * @inheritDoc
 */
Wl_Quiz_QuizElement72Model.prototype.config=function()
{
  return {"a_field": {"a_access_log": {"get": {"result": true}},"a_element": {"get": {"result": true},"post": {"post": true}},"a_setting": {"get": {"result": true},"post": {"post": true},"put": {"result": true}},"can_amend": {"get": {"result": true}},"can_anonymous": {"get": {"get": true},"post": {"get": true}},"i_responses": {"get": {"result": true}},"is_active": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"is_builder": {"get": {"get": true}},"is_imported": {"get": {"result": true}},"is_prevent_franchisee": {"get": {"result": true}},"is_simple": {"get": {"get": true},"post": {"get": true}},"json_element": {"post": {"post": true}},"json_purchase_item": {"get": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_business_type": {"get": {"result": true},"post": {"post": true}},"k_quiz": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_quiz_login": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"s_secret": {"get": {"get": true}},"show_numbering": {"get": {"result": true},"post": {"post": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"uid_client": {"get": {"get": true}},"url_quiz": {"get": {"result": true},"put": {"result": true}},"url_quiz_kiosk": {"get": {"result": true},"put": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Quiz_QuizElement72Model.instanceGet
 * @param {string} k_business Business key within which quiz is managed.
 * @param {string} k_quiz Quiz key.
 * @param {string} k_quiz_login Quiz login key.
 * @param {string} uid_client UID of the client for which quiz requested.
 * @param {string} json_purchase_item List of purchase items for which this form is loaded in JSON format. This variable supports two structures: New structure: Each element key has the format `[id_purchase_item]::[k_id]`, where:  Old structure: Each element is a string in the format `[id_purchase_item]::[k_id]`. Empty in case when purchase item not specified or form loaded from direct link.
 * @returns {Wl_Quiz_QuizElement72Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */