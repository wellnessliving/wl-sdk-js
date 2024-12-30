/**
 * Retrieves a list of a user's quiz responses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Profile\Form\Response\ResponseListApi
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
   * @property {string[]} a_visit List of visit keys associated with uncompleted response.
   *    Key is visit key.
   *    Value is date of visit.
   * @property {string} dtl_date The date of the request to fill out a quiz form.
   * @property {number} id_source The place where the request to fill out a quiz form occurred. One of the {@link Wl_Quiz_Response_SourceSid} constants.
   * @property {boolean} is_private Determines whether the form can be viewed by staff member only after confirmation.
   *    `true` - the form can be viewed only after confirmation.
   *    `false` - the form can always be viewed.
   * @property {string} k_quiz The quiz key.
   * @property {string} k_quiz_login The key of the request.
   * @property {?string} k_quiz_response Key of the response.
   *    Not `null` in case when response in draft status.
   * @property {string} text_title The quiz title.
   */

  /**
   * The list of uncompleted quiz responses. Each element has the next structure: <dl>
   *  <dt>string[] <var>a_visit</var></dt>
   *  <dd>
   *    List of visit keys associated with uncompleted response.
   *    Key is visit key.
   *    Value is date of visit.
   *  </dd>
   *  <dt>string <var>dtl_date</var></dt>
   *  <dd>The date of the request to fill out a quiz form.</dd>
   *  <dt>int <var>id_source</var></dt>
   *  <dd>The place where the request to fill out a quiz form occurred. One of the {@link Wl_Quiz_Response_SourceSid} constants.</dd>
   *  <dt>bool <var>is_private</var></dt>
   *  <dd>
   *    Determines whether the form can be viewed by staff member only after confirmation.
   *    `true` - the form can be viewed only after confirmation.
   *    `false` - the form can always be viewed.
   *  </dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>The quiz key.</dd>
   *  <dt>string <var>k_quiz_login</var></dt>
   *  <dd>The key of the request.</dd>
   *  <dt>string|null <var>k_quiz_response</var></dt>
   *  <dd>
   *    Key of the response.
   *    Not `null` in case when response in draft status.
   *  </dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>The quiz title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Form_Response_ResponseListModel_a_quiz_login[]}
   */
  this.a_quiz_login = [];

  /**
   * @typedef {{}} Wl_Profile_Form_Response_ResponseListModel_a_quiz_response
   * @property {string[]} a_visit List of visit keys associated with uncompleted response.
   *    Key is visit key.
   *    Value is date of visit.
   * @property {string} dtl_date The date of the request to fill out a quiz form.
   * @property {number} id_source The place where the request to fill out the quiz form occurred. One of the {@link Wl_Quiz_Response_SourceSid} constants.
   * @property {number} id_status Status of the response. One of {@link Core_Quiz_Response_ResponseStatusSid} constants.
   * @property {boolean} is_private Determines whether the form can be viewed by staff member only after confirmation.
   *    `true` - the form can be viewed only after confirmation.
   *    `false` - the form can always be viewed.
   * @property {string} k_quiz The quiz key.
   * @property {string} k_quiz_login The quiz response key.
   * @property {?string} text_amend_date Date when response amended.
   *    `null` if response was not edited.
   * @property {?string} text_amend_user Name of the user who amend the response.
   *    `null` if response was not edited.
   * @property {string} text_title The quiz title.
   * @property {string} text_user Name of user who complete response or start a draft.
   */

  /**
   * The list of completed quiz responses. Each element has the next structure: <dl>
   *  <dt>string[] <var>a_visit</var></dt>
   *  <dd>
   *    List of visit keys associated with uncompleted response.
   *    Key is visit key.
   *    Value is date of visit.
   *  </dd>
   *  <dt>string <var>dtl_date</var></dt>
   *  <dd>The date of the request to fill out a quiz form.</dd>
   *  <dt>int <var>id_source</var></dt>
   *  <dd>The place where the request to fill out the quiz form occurred. One of the {@link Wl_Quiz_Response_SourceSid} constants.</dd>
   *  <dt>int <var>id_status</var></dt>
   *  <dd>Status of the response. One of {@link Core_Quiz_Response_ResponseStatusSid} constants.</dd>
   *  <dt>bool <var>is_private</var></dt>
   *  <dd>
   *    Determines whether the form can be viewed by staff member only after confirmation.
   *    `true` - the form can be viewed only after confirmation.
   *    `false` - the form can always be viewed.
   *  </dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>The quiz key.</dd>
   *  <dt>string <var>k_quiz_login</var></dt>
   *  <dd>The quiz response key.</dd>
   *  <dt>string|null <var>text_amend_date</var></dt>
   *  <dd>
   *    Date when response amended.
   *    `null` if response was not edited.
   *  </dd>
   *  <dt>string|null <var>text_amend_user</var></dt>
   *  <dd>
   *    Name of the user who amend the response.
   *    `null` if response was not edited.
   *  </dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>The quiz title.</dd>
   *  <dt>string <var>text_user</var></dt>
   *  <dd>Name of user who complete response or start a draft.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Form_Response_ResponseListModel_a_quiz_response[]}
   */
  this.a_quiz_response = [];

  /**
   * Whether response can be amended by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_amend = undefined;

  /**
   * Whether response can be filled by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_fill = undefined;

  /**
   * Whether response can be removed by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_remove = undefined;

  /**
   * Whether response can be viewed by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_view = undefined;

  /**
   * Defines whether completed forms should not be included in result list of forms.
   *
   * `true` to exclude completed forms from result.
   * `false` to include completed forms to result.
   *
   * @get get
   * @type {boolean}
   */
  this.hide_completed = false;

  /**
   * Defines whether optional uncompleted forms should not be included in result list of forms.
   *
   * `true` to exclude optional uncompleted forms from result.
   * `false` to include optional uncompleted forms to result.
   *
   * @get get
   * @type {boolean}
   */
  this.hide_optional = false;

  /**
   * This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user to show information for.
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
  return {"a_field": {"a_quiz_login": {"get": {"result": true}},"a_quiz_response": {"get": {"result": true}},"can_amend": {"get": {"result": true}},"can_fill": {"get": {"result": true}},"can_remove": {"get": {"result": true}},"can_view": {"get": {"result": true}},"hide_completed": {"get": {"get": true}},"hide_optional": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Form_Response_ResponseListModel.instanceGet
 * @param {string} uid The key of the user to show information for.
 * @param {string} k_business The key of the business to show information for.
 * @returns {Wl_Profile_Form_Response_ResponseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */