/**
 * Deletes the quiz with the given key.
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_access_log
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
   * @type {Wl_Quiz_QuizElementModel_a_access_log[]}
   */
  this.a_access_log = undefined;

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_A_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_A_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_A_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_A
   * @property {Wl_Quiz_QuizElementModel_a_element_A_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_B_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_B_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_B_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_B
   * @property {Wl_Quiz_QuizElementModel_a_element_B_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_C_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_C_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_C_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_C
   * @property {Wl_Quiz_QuizElementModel_a_element_C_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_D_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_D_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_D_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_D
   * @property {Wl_Quiz_QuizElementModel_a_element_D_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_E_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_E_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_E_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_E
   * @property {Wl_Quiz_QuizElementModel_a_element_E_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_F_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_F_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_F_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_F
   * @property {Wl_Quiz_QuizElementModel_a_element_F_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_G_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_G_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_G_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_G
   * @property {Wl_Quiz_QuizElementModel_a_element_G_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_H_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_H_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_H_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_H
   * @property {Wl_Quiz_QuizElementModel_a_element_H_a_amendment} a_amendment List of amendments. Each element has next structure:
   * @property {number} id_element Element ID. One of {@link Core_Quiz_Element_ElementSid} constants.
   * @property {boolean} is_require Whether element is required or not.
   * @property {?string} k_quiz_element Quiz element key.
   * @property {?string} k_quiz_element_old Old quiz element key.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_I_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_I_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_I_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_I
   * @property {Wl_Quiz_QuizElementModel_a_element_I_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_J_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_J_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_J_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_J
   * @property {Wl_Quiz_QuizElementModel_a_element_J_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_K_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_K_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_K_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_K
   * @property {Wl_Quiz_QuizElementModel_a_element_K_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_L_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_L_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_L_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_L
   * @property {Wl_Quiz_QuizElementModel_a_element_L_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_M_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_M_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_M_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_M
   * @property {Wl_Quiz_QuizElementModel_a_element_M_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_N_a_amendment_a_change
   * @property {string} text_note Change note.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_N_a_amendment
   * @property {Wl_Quiz_QuizElementModel_a_element_N_a_amendment_a_change} a_change Information about amend.
   * @property {string} dtu_action Date/time when amend made.
   * @property {string} text_actor Name of the amend actor.
   * @property {string} text_datetime Date/time when amend made in textual view.
   * @property {string} uid_actor UID of the amend actor.
   */

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_element_N
   * @property {Wl_Quiz_QuizElementModel_a_element_N_a_amendment} a_amendment List of amendments. Each element has next structure:
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
   * List of quiz elements.
   *
   * Each element responsible for one quiz element and structure of each value depend
   * on type of element and contains public arguments of responsible class element.
   *
   * Order of the elements in array corresponds to order of elements on the form.
   *
   * @get result
   * @post post
   * @type {(Wl_Quiz_QuizElementModel_a_element_A|Wl_Quiz_QuizElementModel_a_element_B|Wl_Quiz_QuizElementModel_a_element_C|Wl_Quiz_QuizElementModel_a_element_D|Wl_Quiz_QuizElementModel_a_element_E|Wl_Quiz_QuizElementModel_a_element_F|Wl_Quiz_QuizElementModel_a_element_G|Wl_Quiz_QuizElementModel_a_element_H|Wl_Quiz_QuizElementModel_a_element_I|Wl_Quiz_QuizElementModel_a_element_J|Wl_Quiz_QuizElementModel_a_element_K|Wl_Quiz_QuizElementModel_a_element_L|Wl_Quiz_QuizElementModel_a_element_M|Wl_Quiz_QuizElementModel_a_element_N)[]}
   */
  this.a_element = undefined;

  /**
   * @typedef {{}} Wl_Quiz_QuizElementModel_a_setting
   * @property {string[]} a_notify_additional List of additional email addresses which should receive email notification after quiz is submitted.
   * @property {string[][]} a_service List of services grouped by service ID.
   * @property {boolean} hide_frontend Whether completed forms should be hidden for client in frontend.
   * @property {number|string} i_notify_automated Number of periods email reminders should be sent for incomplete forms after. Type of a period is specified by   `id_notify_automated`.
   * @property {number} id_book_request_type Whether response is required every time they book service.
   * @property {number} id_notify_automated Time interval ID. One of {@link ADurationSid} constants.
   * @property {number} id_purchase_request_type Whether response is required every time they purchase service.
   * @property {boolean} is_amend_support Whether form support amending responses.
   * @property {boolean} is_book Whether quiz is required during/after book service selected in `a_service` list. * Related to options: * * `is_service_all` * * `is_book_before` * * `id_book_request_type`
   * @property {boolean} is_book_before Whether quiz is required during booking process.
   * @property {boolean} is_internal Whether form can be required for clients. Internal forms can be only added to client profiles or filled by direct link,  but they don't prevent clients to perform any actions until form filled.  `true` if form can be visible to clients  `false` otherwise
   * @property {boolean} is_notify_additional Whether email notification should be sent to specific email addresses after quiz is submitted.
   * @property {boolean} is_notify_automated Whether email reminders should be sent for incomplete forms.
   * @property {boolean} is_notify_client Whether email notification should be sent to client after quiz submitted.
   * @property {boolean} is_notify_staff Whether email notification should be sent to staff members after quiz is submitted.
   * @property {boolean} is_prevent_franchisee Whether form can be edited by franchisee. `true` prevent franchisees from editing this form, `false` - otherwise.
   * @property {boolean} is_private Whether form can be viewed by staff member only after confirmation. `true` if form can be viewed only after confirmation `false` if form can be viewed always
   * @property {boolean} is_purchase Whether quiz is required during/after purchase service selected in `a_service` list. Related to options: * `is_purchase_all` * `is_purchase_before` * `id_purchase_request_type`
   * @property {boolean} is_purchase_all Whether all services for purchase should be added in `a_service`.
   * @property {boolean} is_purchase_before Whether quiz is required during purchase process.
   * @property {boolean} is_register_after Whether quiz is required after registration process.
   * @property {boolean} is_register_before Whether quiz is required during registration process.
   * @property {boolean} is_require_user Whether client should be redirected to sign-in page before completing the form.
   * @property {boolean} is_service_all Whether all services for booking should be added in `a_service`.
   */

  /**
   * Quiz settings.
   *
   * @get result
   * @post post
   * @put result
   * @type {Wl_Quiz_QuizElementModel_a_setting}
   */
  this.a_setting = undefined;

  /**
   * Whether user has privileges to amend form.
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
   * Number of responses for specific quiz.
   *
   * @get result
   * @type {number}
   */
  this.i_responses = undefined;

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
  this.is_prevent_franchisee = undefined;

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
   * @type {number}
   */
  this.json_purchase_item = 0;

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
  return {"a_field":{"a_access_log":{"get":{"result":true}},"a_element":{"get":{"result":true},"post":{"post":true}},"a_setting":{"get":{"result":true},"post":{"post":true},"put":{"result":true}},"can_amend":{"get":{"result":true}},"can_anonymous":{"get":{"get":true},"post":{"get":true}},"i_responses":{"get":{"result":true}},"is_active":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"is_builder":{"get":{"get":true}},"is_imported":{"get":{"result":true}},"is_prevent_franchisee":{"get":{"result":true}},"is_simple":{"get":{"get":true},"post":{"get":true}},"json_element":{"post":{"post":true}},"json_purchase_item":{"get":{"get":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_business_type":{"get":{"result":true},"post":{"post":true}},"k_quiz":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"k_quiz_login":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"show_numbering":{"get":{"result":true},"post":{"post":true}},"text_title":{"get":{"result":true},"post":{"post":true}},"uid_client":{"get":{"get":true}},"url_quiz":{"get":{"result":true},"put":{"result":true}},"url_quiz_kiosk":{"get":{"result":true},"put":{"result":true}}}};
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

/**
 * Deletes the quiz with the given key.
 *
 * Permanently removes the quiz and all associated elements.
 *
 * @function
 * @name Wl_Quiz_QuizElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns quiz element data including settings, elements, and access information for the given quiz.
 *
 * Loads the quiz configuration, element list, and access log for the specified business and user context,
 * applying franchise and privilege checks before returning the result.
 *
 * @function
 * @name Wl_Quiz_QuizElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates or updates a quiz with the given elements and settings.
 *
 * When no quiz key is provided, a new quiz is created; when a key is given, the existing quiz
 * is updated in place. Element list and configuration are saved in a single transaction.
 *
 * @function
 * @name Wl_Quiz_QuizElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates the active status of the given quiz.
 *
 * Toggles whether the quiz is available for respondents to fill out. Inactive quizzes are hidden
 * from the booking and profile flows but their existing responses are preserved.
 *
 * @function
 * @name Wl_Quiz_QuizElementModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
