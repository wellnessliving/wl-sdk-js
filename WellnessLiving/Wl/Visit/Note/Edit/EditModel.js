/**
 * Visit notes editor.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Note_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_visit";

  /**
   * Uncompressed note content received from form.
   *
   * @post post
   * @type {{}}
   */
  this.a_data = [];

  /**
   * Content additional field of visit note. Format is same as <tt>a_visit_note</tt> field.
   *
   * @get result
   * @type {{}}
   */
  this.a_data_note_additional = undefined;

  /**
   * Contains general information.
   *
   * @get result
   * @type {{}}
   */
  this.a_info = undefined;

  /**
   * <dl>
   *   <dt>
   *     string <var>text_field</var>
   *   </dt>
   *   <dd>
   *     A title of field of a visit note.
   *   </dd>
   *   <dt>
   *     string <var>text_field_name</var>
   *   </dt>
   *   <dd>
   *     A field element name.
   *   </dd>
   *   <dt>
   *     string <var>text_id</var>
   *   </dt>
   *   <dd>
   *     A field element id.
   *   </dd>
   *   <dt>
   *     string <var>text_key</var>
   *   </dt>
   *   <dd>
   *     Not translated a title of field of a visit note.
   *   </dd>
   *   <dt>
   *     string <var>text_text</var>
   *   </dt>
   *   <dd>
   *     A content of field of a visit note.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {*}
   */
  this.a_visit_note = undefined;

  /**
   * Can the current user edit the note.
   *
   * @get result
   * @type {boolean}
   */
  this.can_edit = undefined;

  /**
   * Note type, one of {@link \Wl\Visit\Note\Sid\NoteSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_note = 0;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit ID, primary key in {@link \RsVisitSql}.
   *
   * Empty value means not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Visit note key, primary key in {@link \Wl\Visit\Note\Sql}.
   *
   * @delete get
   * @type {string}
   */
  this.k_visit_note = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Note_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Visit_Note_Edit_EditModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"post": {"post": true}},"a_data_note_additional": {"get": {"result": true}},"a_info": {"get": {"result": true}},"a_visit_note": {"get": {"result": true}},"can_edit": {"get": {"result": true}},"id_note": {"get": {"result": true},"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_visit": {"get": {"get": true},"post": {"get": true}},"k_visit_note": {"delete": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Visit_Note_Edit_EditModel.instanceGet
 * @param {string} k_visit Visit ID, primary key in {@link \RsVisitSql}. Empty value means not set.
 * @returns {Wl_Visit_Note_Edit_EditModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */