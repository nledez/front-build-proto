export default {
  people: {
    title: 'People',
    new_person: 'Add a new employee',
    edit_title: 'Edit person',
    persons: 'person | persons',
    delete_text: 'Are you sure you want to remove {personName} from your database?',
    delete_error: 'An error occured while deleting this person. There are probably data linked to it. Are you sure this person has no assignation or wrote no comment?',
    csv: {
      import_file: 'Import a .csv file',
      export_file: 'Download as a .csv file',
      import_title: 'Import data from a CSV file',
      required_fields: 'Your CSV file requires the following columns',
      select_file: 'Please select a file from one of your folder:',
      error_upload: 'An error occured while uploading your CSV file.'
    },
    list: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone'
    },
    fields: {
      first_name: 'First name',
      last_name: 'Last name',
      email: 'Email',
      phone: 'Phone',
      old_password: 'Current password',
      password: 'New password',
      password_2: 'New password (repeat)'
    }
  },

  profile: {
    title: 'Your Profile',
    info_title: 'Information',
    password_title: 'Change password',
    timezone: 'Timezone',
    language: 'Language',
    save: {
      button: 'Save changes',
      error: 'An error occured while saving changes'
    },
    change_password: {
      button: 'Change password',
      success: 'Your password was successfully changed!',
      unvalid: 'Your new password confirmation doesn\'t match or your password is too short (7 chars, at least, is expected).',
      error: 'An error occured while changing password. Please verify your current password.'
    }
  },

  main: {
    profile: 'Profile',
    logout: 'Logout',
    cancel: 'Cancel',
    confirmation: 'Confirm',
    confirmation_and_stay: 'Confirm and stay',
    delete_text: 'Are you sure you want to remove {name} from your database?',
    csv: {
      import_file: 'Import a .csv file',
      export_file: 'Download as a .csv file',
      import_title: 'Import data from a CSV file',
      required_fields: 'Your CSV file requires the following columns',
      select_file: 'Please select a file from one of your folder:',
      error_upload: 'An error occured while uploading your CSV file.'
    }
  },

  login: {
    title: 'Log in to Kitsu',
    login: 'Log in',
    login_failed: 'Log in failed, please verify your credentials',
    fields: {
      email: 'Email',
      password: 'Password'
    }
  },

  productions: {
    title: 'Productions',
    edit_title: 'Edit production',
    number: 'production | productions',
    new_production: 'Add a production',
    fields: {
      name: 'Name',
      status: 'Status'
    },
    status: {
      open: 'Open',
      closed: 'Close'
    },
    delete_text: 'Are you sure you want to remove {name} from your database?',
    delete_error: 'An error occured while deleting this production. There are probably data linked to it. Are you sure this production has no task, shot or asset linked to it?'
  },

  comments: {
    retake: 'Retake',
    validated: 'Validated!',
    validation_required: 'Validation Required',
    add_comment: 'Add a comment...',
    post_status: 'Post status'
  },

  tasks: {
    preview: 'Previews',
    no_preview: 'There is currently no preview for this task.',
    no_comment: 'There is currently no comment for this task.',
    validation: 'Validation',
    create_tasks: 'Add tasks',
    create_tasks_shot: 'Add tasks for current shots',
    create_tasks_shot_explaination: 'You are going to create a new task for each shot of current list for the given task type. Do you want to continue?',
    create_tasks_shot_failed: 'A server error occured while proceeding creations.',
    create_tasks_asset: 'Add tasks for current assets',
    create_tasks_asset_explaination: 'You are going to create a new task for each asset of current list for the given task type. Do you want to continue?',
    create_tasks_asset_failed: 'A server error occured while proceeding creations.',
    add_preview: 'Add preview',
    add_preview_error: 'An error occured while adding preview.',
    select_preview_file: 'Please select a picture from your hard drive to be used as a preview for the current task:',
    delete_error: 'An error occured while deleting task.',
    feedback: 'feedback',
    fields: {
      task_type: 'Task Type'
    }
  },

  task_types: {
    title: 'Task Types',
    edit_title: 'Edit task type',
    number: 'task type | task types',
    new_task_type: 'Add a task type',
    fields: {
      name: 'Name',
      color: 'Color'
    },
    delete_text: 'Are you sure you want to remove {name} from your database?',
    delete_error: 'An error occured while deleting this task type. There are probably data linked to it. Are you sure this task type has no task linked to it?'
  },

  asset_types: {
    title: 'Asset Types',
    edit_title: 'Edit asset type',
    number: 'asset type | asset types',
    new_asset_type: 'Add an asset type',
    fields: {
      name: 'Name'
    },
    delete_text: 'Are you sure you want to remove {name} from your database?',
    delete_error: 'An error occured while deleting this asset type. There are probably data linked to it. Are you sure this asset type has no asset linked to it?'
  },

  assets: {
    title: 'Assets',
    edit_title: 'Edit asset',
    number: 'asset | assets',
    new_asset: 'Add an asset',
    edit_fail: 'Creation or edition failed, an error occured.',
    new_success: 'Asset {name} successfully created.',
    fields: {
      name: 'Asset',
      type: 'Type',
      production: 'Prod',
      description: 'Description'
    },
    delete_text: 'Are you sure you want to remove {name} from your database?',
    delete_error: 'An error occured while deleting this asset. There are probably data linked to it. Are you sure this asset type has no task linked to it?'
  },

  shots: {
    title: 'Shots',
    edit_title: 'Edit shot',
    number: 'shot | shots',
    new_shot: 'Add a shot',
    edit_fail: 'Creation or edition failed, an error occured.',
    new_success: 'Shot {name} successfully created.',
    fields: {
      name: 'Shot',
      episode: 'Episode',
      sequence: 'Sequence',
      production: 'Prod',
      description: 'Description'
    },
    delete_text: 'Are you sure you want to remove {name} from your database?',
    delete_error: 'An error occured while deleting this shot. There are probably data linked to it. Are you sure this shot has no task linked to it?'
  },

  server_down: {
    title: 'Kitsu encountered an error while reaching its data API.',
    text: 'Please contact your vendor support, your system administrator or your IT department to understand what is going wrong.'
  },

  not_found: {
    title: 'Page not found... are your looking for something you deleted?',
    text: 'There was something wrong with the link you clicked on, we encourage you to come back on the home page.'
  }
}
