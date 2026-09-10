/**
 * Deletes the specified quiz response or list of responses for the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Quiz_Response_Response65Model} instead.
 */
function Wl_Quiz_Response_ResponseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_quiz_response";

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_access_log
   * @property {string} dtu_activity Date and time of the quiz changes.
   * @property {number} id_activity One of {@link Wl_Quiz_Activity_ActivitySid} constants.
   * @property {string} text_activity Title of the activity
   * @property {string} text_actor Full name of the user who made an activity.
   * @property {string} text_date Date and time of the quiz changes in appropriate format string for further render.
   * @property {string} uid_actor User's key.
   * @property {string} url_actor Url for view information about the user who made activity (admin, staff, client).
   */

  /**
   * Access log data.
   *
   * @get result
   * @type {Wl_Quiz_Response_ResponseModel_a_access_log[]}
   */
  this.a_access_log = undefined;

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_A_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_A_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_A_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_A
   * @property {Wl_Quiz_Response_ResponseModel_a_element_A_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {number[]} a_answer Answer array for selected question options.
   * @property {string[]} a_list Array for a dropdown question's options.
   * @property {string} html_description Additional string for detail description of the question.
   * @property {string} html_question Main html of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_multiple Answer can have multiple options selected.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_description Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_question Main text of the input question.
   * @property {string} xml_description Additional XML for detail description of the question.
   * @property {string} xml_question Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_B_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_B_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_B_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_B
   * @property {Wl_Quiz_Response_ResponseModel_a_element_B_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_heading Additional HTML for detail description of the question.
   * @property {string} html_subheading Main HTML of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require Whether element is required or not.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_heading Additional string for detail description of the question.
   * @property {string} text_subheading Main text of the input question.
   * @property {string} xml_heading Additional XML for detail description of the question.
   * @property {string} xml_subheading Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_C_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_C_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_C_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_C
   * @property {Wl_Quiz_Response_ResponseModel_a_element_C_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {number[]} a_answer Answer array for selected question options.
   * @property {string[]} a_list Array for a dropdown question's options.
   * @property {string} html_description Additional string for detail description of the question.
   * @property {string} html_question Main html of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_multiple Answer can have multiple options selected.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_description Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_question Main text of the input question.
   * @property {string} xml_description Additional XML for detail description of the question.
   * @property {string} xml_question Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_D_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_D_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_D_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_D
   * @property {Wl_Quiz_Response_ResponseModel_a_element_D_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {boolean} has_duplicate Whether this element has a duplicate.
   * @property {string} html_caption HTML of the image caption.
   * @property {string} html_heading Main HTML of the image heading.
   * @property {string} html_subheading Additional HTML for detail description of the image (optional).
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require Whether element is required or not.
   * @property {string} k_id_source Image source key for duplicate.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} s_command Command for image save prepare.
   * @property {string} text_caption Image caption.
   * @property {string} xml_heading Main XML of the input question.
   * @property {string} xml_subheading Additional XML for detail description of the question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_E_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_E_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_E_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_E
   * @property {Wl_Quiz_Response_ResponseModel_a_element_E_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {*[]} a_markup_image Markup images files.
   * @property {boolean} can_upload Can user upload custom image.
   * @property {string} html_heading Main HTML of the input question.
   * @property {string} html_subheading Additional HTML for detail description of the question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_delete_custom_markup_image ` true ` if custom markup image is to be deleted `false` otherwise.
   * @property {boolean} is_require
   * @property {string} k_id Fake id used for image upload.
   * @property {string} k_id_custom_markup_image Image ID of the temporary uploaded custom markup image to be copied as permanent drive link.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} s_link_default_markup_image Link of the source default markup image to copy to the element.
   * @property {string} s_markup_image Post-Markup image binary text.
   * @property {string} text_heading Main text of the input question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_subheading Additional string for detail description of the question.
   * @property {string} url_custom_default_image Custom default image path.
   * @property {string} xml_heading Main XML of the input question.
   * @property {string} xml_subheading Additional XML for detail description of the question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_F_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_F_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_F_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_F
   * @property {Wl_Quiz_Response_ResponseModel_a_element_F_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_heading Additional html for detail description of the question.
   * @property {string} html_signature_footer Footer text of signature pad.
   * @property {string} html_signature_header Header text of signature pad.
   * @property {string} html_subheading Main html of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} s_signature Signature binary text.
   * @property {string} text_heading Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_subheading Main text of the input question.
   * @property {string} xml_heading Additional XML for detail description of the question.
   * @property {string} xml_subheading Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_G_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_G_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_G_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_G
   * @property {Wl_Quiz_Response_ResponseModel_a_element_G_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_description Additional HTML for detail description of the question.
   * @property {string} html_question Main HTML of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_answer Answer text for a question.
   * @property {string} text_description Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_question Main text of the input question.
   * @property {string} xml_description Additional XML for detail description of the question.
   * @property {string} xml_question Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_H_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_H_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_H_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_H
   * @property {Wl_Quiz_Response_ResponseModel_a_element_H_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require Whether element is required or not.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_I_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_I_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_I_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_I
   * @property {Wl_Quiz_Response_ResponseModel_a_element_I_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {number[]} a_answer Answer array for selected question options.
   * @property {string[]} a_list Array for a dropdown question's options.
   * @property {string} html_description Additional string for detail description of the question.
   * @property {string} html_question Main html of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_multiple Answer can have multiple options selected.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_description Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_question Main text of the input question.
   * @property {string} xml_description Additional XML for detail description of the question.
   * @property {string} xml_question Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_J_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_J_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_J_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_J
   * @property {Wl_Quiz_Response_ResponseModel_a_element_J_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_description Sub-question html.
   * @property {string} html_question Question html.
   * @property {number} i_rate Selected rate.
   * @property {number} i_scale Rate scale.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_description Sub-question text.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_question Question text.
   * @property {string} xml_description Sub-question XML.
   * @property {string} xml_question Question XML.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_K_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_K_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_K_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_K
   * @property {Wl_Quiz_Response_ResponseModel_a_element_K_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {*[]} a_markup_image Markup images files.
   * @property {boolean} has_duplicate Whether this element has a duplicate.
   * @property {string} html_heading Main HTML of the input question.
   * @property {string} html_subheading Additional HTML for detail description of the question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require
   * @property {string} k_id_image_left Left response image key.
   * @property {string} k_id_image_right Right response image key.
   * @property {string} k_id_source_left Left image source key for duplicate.
   * @property {string} k_id_source_right Right image source key for duplicate.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} s_command_left Command for left image save prepare.
   * @property {string} s_command_right Command for right image save prepare.
   * @property {string} s_markup_image Post-Markup image binary text.
   * @property {string} text_left_image Title for left image.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_right_image Title for right image.
   * @property {string} xml_heading Main XML of the input question.
   * @property {string} xml_subheading Additional XML for detail description of the question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_L_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_L_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_L_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_L
   * @property {Wl_Quiz_Response_ResponseModel_a_element_L_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_heading Additional html for detail description of the question.
   * @property {string} html_signature_footer Footer text of signature pad.
   * @property {string} html_signature_header Header text of signature pad.
   * @property {string} html_subheading Main html of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} s_signature Signature binary text.
   * @property {string} text_heading Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_subheading Main text of the input question.
   * @property {string} xml_heading Additional XML for detail description of the question.
   * @property {string} xml_subheading Main XML of the input question.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_M_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_M_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_M_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_M
   * @property {Wl_Quiz_Response_ResponseModel_a_element_M_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_content Main content HTML.
   * @property {string} html_heading Heading HTML.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require Whether element is required or not.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_content Main content text.
   * @property {string} text_heading Heading text.
   * @property {string} xml_content Main content XML.
   * @property {string} xml_heading Heading XML.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_N_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_N_a_amendment
   * @property {Wl_Quiz_Response_ResponseModel_a_element_N_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_element_N
   * @property {Wl_Quiz_Response_ResponseModel_a_element_N_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {string} html_description Additional HTML for detail description of the question.
   * @property {string} html_question Main HTML of the input question.
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   * @property {string} text_answer Answer text for a question.
   * @property {string} text_description Additional string for detail description of the question.
   * @property {?string} text_note Additional note for response.
   * @property {string} text_question Main text of the input question.
   * @property {string} xml_description Additional XML for detail description of the question.
   * @property {string} xml_question Main XML of the input question.
   */

  /**
   * List of quiz questions with responses.
   *
   * @get result
   * @post post
   * @type {(Wl_Quiz_Response_ResponseModel_a_element_A|Wl_Quiz_Response_ResponseModel_a_element_B|Wl_Quiz_Response_ResponseModel_a_element_C|Wl_Quiz_Response_ResponseModel_a_element_D|Wl_Quiz_Response_ResponseModel_a_element_E|Wl_Quiz_Response_ResponseModel_a_element_F|Wl_Quiz_Response_ResponseModel_a_element_G|Wl_Quiz_Response_ResponseModel_a_element_H|Wl_Quiz_Response_ResponseModel_a_element_I|Wl_Quiz_Response_ResponseModel_a_element_J|Wl_Quiz_Response_ResponseModel_a_element_K|Wl_Quiz_Response_ResponseModel_a_element_L|Wl_Quiz_Response_ResponseModel_a_element_M|Wl_Quiz_Response_ResponseModel_a_element_N)[]}
   */
  this.a_element = undefined;

  /**
   * Elements' uploaded files.
   *
   * @post post
   * @type {string}
   */
  this.a_element_file = "";

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_purchase_item
   * @property {number} id_purchase_item The ID of the purchase item. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The item key. This depends on `id_purchase_item` of this array.
   */

  /**
   * List of purchase items for which this form is loaded.
   *
   * The list of purchase items.
   * Each element has the format `[id_purchase_item]::[k_id]`, where: 
   *
   * Empty in case when purchase item not specified or form loaded from direct link.
   *
   * @post post
   * @type {Wl_Quiz_Response_ResponseModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_quick_config
   * @property {number} id_table Quick purchase type. One of {@link Wl_Catalog_QuickPurchaseTypeSid} constant.
   * @property {boolean} is_quick_buy Whether quick buy mode should be used. It means that specific template will be loaded and specific cart will be used.
   * @property {string} k_appointment Appointment key to pay for.
   * @property {string} k_id Item key within `id_table` table that Quick Buy performed for.
   * @property {string} k_visit Visit key to pay for.
   * @property {string} uid User that Quick Buy performed for.
   */

  /**
   * Data for Quick Buy. Empty array if this is not a Quick Buy session.
   *
   * @post post
   * @type {Wl_Quiz_Response_ResponseModel_a_quick_config}
   */
  this.a_quick_config = undefined;

  /**
   * Quiz response key list.
   *
   * @delete get
   * @put get
   * @type {string[]}
   */
  this.a_quiz_response_key = undefined;

  /**
   * @typedef {{}} Wl_Quiz_Response_ResponseModel_a_service_info
   * @property {string} text_date Formatted visit date and time in the location's time zone.
   * @property {string} text_location Location title.
   * @property {string} text_service Service title.
   * @property {string} text_staff_member Comma-separated list of full names of staff members conducting the visit.
   */

  /**
   * Information about service if response connected to visit.
   * Empty array if the response is not connected to a visit:
   *
   * @get result
   * @type {Wl_Quiz_Response_ResponseModel_a_service_info}
   */
  this.a_service_info = undefined;

  /**
   * Whether response can be amended by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_amend = undefined;

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
   * Date when response was submitted.
   *
   * @get result
   * @type {string}
   */
  this.dtu_response = undefined;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @delete get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Response source. One of {@link Wl_Quiz_Response_SourceSid} constants.
   *
   * @get result
   * @post post
   * @see Wl_Quiz_Response_SourceSid
   * @type {number}
   */
  this.id_source = 0;

  /**
   * Response status ID.
   *
   * @get result
   * @see Core_Quiz_Response_ResponseStatusSid
   * @type {number}
   */
  this.id_status = undefined;

  /**
   * `true` for load answers for response, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_answer = true;

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
   * @type {boolean}
   */
  this.is_draft = false;

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
   * Whether the quiz needs to be skipped.
   *
   * @post post
   * @type {boolean}
   */
  this.is_skip = false;

  /**
   * `true` if need make only validation, `false` need make validation and saving response.
   *
   * @post post
   * @type {boolean}
   */
  this.is_validate_only = false;

  /**
   * List of quiz questions with responses in JSON format.
   *
   * @post post
   * @type {string}
   */
  this.json_element = "";

  /**
   * Quiz response key list.
   *
   * @delete post
   * @put post
   * @type {string}
   */
  this.json_quiz_response_key = "";

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
   * @post get
   * @put get
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
   * @put get
   * @type {?string}
   */
  this.k_quiz_response = null;

  /**
   * Secret key for access to quiz request.
   *
   * @post post
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
   * @type {boolean}
   */
  this.show_numbering = true;

  /**
   * Date when response added.
   *
   * @get result
   * @type {string}
   */
  this.text_add_date = undefined;

  /**
   * Date when response amended.
   *
   * @get result
   * @type {string}
   */
  this.text_amend_date = undefined;

  /**
   * Name of the user who amend the response.
   *
   * @get result
   * @type {string}
   */
  this.text_amend_user = undefined;

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
   * Date when response completed.
   *
   * @get result
   * @type {string}
   */
  this.text_complete_date = undefined;

  /**
   * Name of the user who complete the response.
   *
   * @get result
   * @type {string}
   */
  this.text_complete_user = undefined;

  /**
   * Name of the user who owned the response.
   *
   * @get result
   * @type {string}
   */
  this.text_response_by = undefined;

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
   * User's key for the response association.
   *
   * @put get
   * @type {?string}
   */
  this.uid_link = null;

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
  return {"a_field":{"a_access_log":{"get":{"result":true}},"a_element":{"get":{"result":true},"post":{"post":true}},"a_element_file":{"post":{"post":true}},"a_purchase_item":{"post":{"post":true}},"a_quick_config":{"post":{"post":true}},"a_quiz_response_key":{"delete":{"get":true},"put":{"get":true}},"a_service_info":{"get":{"result":true}},"can_amend":{"get":{"result":true}},"can_anonymous":{"get":{"get":true},"post":{"get":true}},"dtu_response":{"get":{"result":true}},"id_mode":{"delete":{"get":true}},"id_source":{"get":{"result":true},"post":{"post":true}},"id_status":{"get":{"result":true}},"is_answer":{"get":{"get":true}},"is_backend":{"post":{"post":true}},"is_draft":{"post":{"post":true}},"is_simple":{"get":{"get":true},"post":{"get":true}},"is_skip":{"post":{"post":true}},"is_validate_only":{"post":{"post":true}},"json_element":{"post":{"post":true}},"json_quiz_response_key":{"delete":{"post":true},"put":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_quiz":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_quiz_login":{"post":{"post":true}},"k_quiz_response":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"s_secret":{"post":{"post":true}},"show_numbering":{"get":{"result":true}},"text_add_date":{"get":{"result":true}},"text_amend_date":{"get":{"result":true}},"text_amend_user":{"get":{"result":true}},"text_appointment_wizard_id":{"post":{"post":true}},"text_class_wizard_id":{"post":{"post":true}},"text_complete_date":{"get":{"result":true}},"text_complete_user":{"get":{"result":true}},"text_response_by":{"get":{"result":true}},"text_title":{"get":{"result":true}},"uid_link":{"put":{"get":true}},"uid_response":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Quiz_Response_ResponseModel.instanceGet
 * @param {string} k_business Business key within which quiz is managed.
 * @param {?string} k_quiz_response Quiz response key. `null` in a case of response creation or removing set of responses in {@link Core_Quiz_QuizResponseModel.a_quiz_response_key}.
 * @returns {Wl_Quiz_Response_ResponseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes the specified quiz response or list of responses for the given business.
 *
 * Validates access privileges and removes the specified response records, updating any related search indexes
 * and activity logs.
 *
 * @function
 * @name Wl_Quiz_Response_ResponseModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns quiz response data including element answers, dates, and access information.
 *
 * Loads the response for the specified quiz and user, resolving answers, formatted dates, and access flags such as
 * amendment availability and PDF generation support.
 *
 * @function
 * @name Wl_Quiz_Response_ResponseModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves a quiz response with the given element answers.
 *
 * Validates the submitted answers and persists the response record in a transaction. If
 * {@link Core_Quiz_QuizResponseModel.is_validate_only} is set, only validation runs and no record is created.
 * Pass {@link Core_Quiz_QuizResponseModel.is_skip} to bypass validation for pre-confirmed responses.
 *
 * @function
 * @name Wl_Quiz_Response_ResponseModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Validates, updates and reindex response information for associated user.
 *
 * Used to amend an already-submitted response, for example when a business allows clients to
 * edit their quiz answers after submission. Re-links the response to its owner and triggers
 * downstream reindexing so search and reporting stay consistent.
 *
 * @function
 * @name Wl_Quiz_Response_ResponseModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
