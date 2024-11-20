/**
 * List of user's uncompleted registration quizzes.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Form_Registration_RegistrationListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Form_Registration_RegistrationListModel_a_quiz
   * @property {boolean} is_require Whether form is require to completion.
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Quiz login key.
   * @property {string} text_title Quiz title.
   */

  /**
   * Require and optional to completion forms. Each element has the next structure: <dl>
   *   <dt>bool <var>is_require</var></dt> <dd>Whether form is require to completion.</dd>
   *   <dt>string <var>k_quiz</var></dt> <dd>Quiz key.</dd>
   *   <dt>string <var>k_quiz_login</var></dt> <dd>Quiz login key.</dd>
   *   <dt>string <var>text_title</var></dt> <dd>Quiz title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Form_Registration_RegistrationListModel_a_quiz[]}
   */
  this.a_quiz = [];

  /**
   * Key of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Form_Registration_RegistrationListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Form_Registration_RegistrationListModel.prototype.config=function()
{
  return {"a_field": {"a_quiz": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Form_Registration_RegistrationListModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {string} k_business Key of a business to show information for.
 * @returns {Wl_Profile_Form_Registration_RegistrationListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */