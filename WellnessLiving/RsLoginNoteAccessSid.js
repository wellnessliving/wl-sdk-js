/**
 * Class for access type to login note.
 */
function RsLoginNoteAccessSid()
{
  // Empty constructor.
}

/**
 * Login note can view all staff and client.
 *
 * @type {number}
 */
RsLoginNoteAccessSid.CLIENT = 1;

/**
 * Login note can view only staff which create this note.
 *
 * @type {number}
 */
RsLoginNoteAccessSid.ME = 2;

/**
 * Login note can view only all staff.
 *
 * @type {number}
 */
RsLoginNoteAccessSid.STAFF = 3;
