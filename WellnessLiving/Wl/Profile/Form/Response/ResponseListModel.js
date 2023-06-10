/**
 * Retrieves list of user's quiz responses.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Form_Response_ResponseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Form_Response_ResponseListModel_a_quiz_login
   * @property {string} dtl_date Date of the request to fill out a quiz form.
   * @property {number} id_source Place where request to fill out a quiz form occurred. One of {@link Wl_Quiz_Response_SourceSid} constants.
   * @property {boolean} is_private Whether form can be viewed by staff member only after confirmation.
   *    `true` if form can be viewed only after confirmation
   *    `false` if form can be viewed always
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Key of the request.
   * @property {string} text_title Title of the quiz.
   */

  /**
   * List of uncompleted quiz responses. Each element has the next structure: <dl>
   *  <dt>string <var>dtl_date</var></dt>
   *  <dd>Date of the request to fill out a quiz form.</dd>
   *  <dt>int <var>id_source</var></dt>
   *  <dd>Place where request to fill out a quiz form occurred. One of {@link Wl_Quiz_Response_SourceSid} constants.</dd>
   *  <dt>bool <var>is_private</var></dt>
   *  <dd>
   *    Whether form can be viewed by staff member only after confirmation.
   *    `true` if form can be viewed only after confirmation
   *    `false` if form can be viewed always
   *  </dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>Quiz key.</dd>
   *  <dt>string <var>k_quiz_login</var></dt>
   *  <dd>Key of the request.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>Title of the quiz.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Form_Response_ResponseListModel_a_quiz_login[]}
   */
  this.a_quiz_login = [];

  /**
   * @typedef {{}} Wl_Profile_Form_Response_ResponseListModel_a_quiz_response
   * @property {string} dtl_date Date of a request to fill out a quiz form.
   * @property {number} id_source Place where request to fill out a quiz form occurred. One of {@link Wl_Quiz_Response_SourceSid} constants.
   * @property {boolean} is_private Whether form can be viewed by staff member only after confirmation.
   *    `true` if form can be viewed only after confirmation
   *    `false` if form can be viewed always
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Quiz response key.
   * @property {string} text_title Title of the quiz.
   */

  /**
   * List of completed quiz responses. Each element has the next structure: <dl>
   *  <dt>string <var>dtl_date</var></dt>
   *  <dd>Date of a request to fill out a quiz form.</dd>
   *  <dt>int <var>id_source</var></dt>
   *  <dd>Place where request to fill out a quiz form occurred. One of {@link Wl_Quiz_Response_SourceSid} constants.</dd>
   *  <dt>bool <var>is_private</var></dt>
   *  <dd>
   *    Whether form can be viewed by staff member only after confirmation.
   *    `true` if form can be viewed only after confirmation
   *    `false` if form can be viewed always
   *  </dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>Quiz key.</dd>
   *  <dt>string <var>k_quiz_login</var></dt>
   *  <dd>Quiz response key.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>Title of the quiz.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Form_Response_ResponseListModel_a_quiz_response[]}
   */
  this.a_quiz_response = [];

  /**
   * `true` if API is being used from backend, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

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

WlSdk_ModelAbstract.extend(Wl_Profile_Form_Response_ResponseListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Form_Response_ResponseListModel.prototype.config=function()
{
  return {"a_field": {"a_quiz_login": {"get": {"result": true}},"a_quiz_response": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Form_Response_ResponseListModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {string} k_business Key of a business to show information for.
 * @returns {Wl_Profile_Form_Response_ResponseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */