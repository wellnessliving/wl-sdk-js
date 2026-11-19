/**
 * Retrieves the list of business quizzes.
 *
 * The requested activity filter is saved as the user's default forms view only when
 * {@link Wl_Quiz_QuizList79Model.is_filter_save} is `true`.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Quiz_QuizList79Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Whether to show active or inactive quizzes.
   *
   * Each element should be one of the YesNoSid constants.
   *
   * @get get
   * @type {number[]}
   */
  this.a_active_id = [];

  /**
   * @typedef {{}} Wl_Quiz_QuizList79Model_a_list_a_config
   * @property {boolean} show_numbering Whether numbering is shown for elements that support numbering.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizList79Model_a_list
   * @property {Wl_Quiz_QuizList79Model_a_list_a_config} a_config Quiz form configuration.
   * @property {string} dtu_create Date and time the quiz was created, in UTC.
   * @property {string} dtu_edit Date and time the quiz was last edited, in UTC.
   * @property {boolean} is_active Whether the quiz is active.
   * @property {boolean} [is_imported] Whether the quiz was imported from an external system.
   * @property {string} k_quiz Quiz key.
   * @property {string} s_file Unique random string used for the form kiosk mode page.
   * @property {string} text_title Quiz title.
   * @property {?string} uid_create Key of the user who created the quiz. `null` if unknown or imported.
   * @property {?string} uid_edit Key of the user who last edited the quiz. `null` if unknown or imported.
   */

  /**
   * List of available quizzes within the quiz holder.
   *
   * @get result
   * @type {Wl_Quiz_QuizList79Model_a_list[]}
   */
  this.a_list = [];

  /**
   * List of quiz keys needed for registration.
   *
   * @get result
   * @type {string[]}
   */
  this.a_quiz_register = [];

  /**
   * Whether to save the requested activity filter as the user's default forms view.
   *
   * `true` for the forms list itself; `false` for a forms picker that must not change that view.
   *
   * @get get
   * @type {boolean}
   */
  this.is_filter_save = true;

  /**
   * Which registration quizzes to return.
   *
   * `true` to return quizzes before registration, `false` otherwise.
   * `null` to return all registration quizzes.
   *
   * @get get
   * @type {?boolean}
   */
  this.is_register_before = null;

  /**
   * Business key within which quizzes are managed.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

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
   * Filter phrase to filter quizzes by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Quiz_QuizList79Model);

/**
 * @inheritDoc
 */
Wl_Quiz_QuizList79Model.prototype.config=function()
{
  return {"a_field": {"a_active_id": {"get": {"get": true}},"a_list": {"get": {"result": true}},"a_quiz_register": {"get": {"result": true}},"is_filter_save": {"get": {"get": true}},"is_register_before": {"get": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_quiz_login": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"text_search": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Quiz_QuizList79Model.instanceGet
 * @param {string} k_business Business key within which quizzes are managed.
 * @returns {Wl_Quiz_QuizList79Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
