/**
 * List of announcement statuses.
 */
function Wl_Announcement_AnnouncementStatusEnum()
{
  // Empty constructor.
}

/**
 * Announcement does not have publish/unpublish dates.
 *
 * @type {number}
 */
Wl_Announcement_AnnouncementStatusEnum.DRAFT = 1;

/**
 * Announcement currently is published.
 *
 * @type {number}
 */
Wl_Announcement_AnnouncementStatusEnum.PUBLISH = 2;

/**
 * Announcement scheduled for publishing.
 *
 * @type {number}
 */
Wl_Announcement_AnnouncementStatusEnum.SCHEDULE = 3;

/**
 * Announcement previously will be published, but now not published.
 *
 * @type {number}
 */
Wl_Announcement_AnnouncementStatusEnum.UNPUBLISH = 4;
