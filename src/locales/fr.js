export default {

  people: {
    title: 'Employés',
    edit_title: 'Modifier les informations de',
    new_person: 'Ajouter un employé',
    delete_text: 'Êtes vous sûr de vouloir retirer {personName} de la base de données?',
    delete_error: 'Une erreur est survenue lors de la suppression. Il y a probablement des données liées à elle. Etes vous sur que cette personne n\'a aucune tâche assignée et n\'a fait aucun commentaire ?',
    persons: 'Personnes',
    csv: {
      import_file: 'Importer un fichier .csv',
      export_file: 'Télécharger en .csv',
      import_title: 'Import employees from a CSV file',
      required_fields: 'Le fichier CSV à importer doit comporter les colonnes suivantes :',
      select_file: 'Sélectionnez un fichier de votre disque dur :'
    },
    list: {
      name: 'Nom',
      email: 'Adresse Mail',
      phone: 'Téléphone'
    },
    fields: {
      first_name: 'Prénom',
      last_name: 'Nom',
      email: 'Adresse email',
      phone: 'Téléphone',
      old_password: 'Mot de passe actuel',
      password: 'Nouveau mot de passe',
      password_2: 'Répétez le nouveau mot de passe'
    }
  },

  profile: {
    title: 'Votre Profil',
    info_title: 'Informations',
    password_title: 'Changement de mot de passe',
    timezone: 'Fuseau horaire',
    language: 'Langue',
    save: {
      button: 'Sauvegardez vos changements',
      error: 'Une erreur est survenue pendant la sauvegarde de vos changememts.'
    },
    change_password: {
      button: 'Changez de mot de passe',
      success: 'Votre mot de passe a été changé avec succès !',
      unvalid: 'Les nouveaux mots de passe sont différents ou votre mot de passe est trop court (7 caractères minimum).',
      error: 'Une erreur s\'est produite lors du changement de mot de passe. Veuillez vérifier votre mot de pass actuel.'
    }
  },

  main: {
    profile: 'Profil',
    logout: 'Se déconnecter',
    cancel: 'Annuler',
    confirmation: 'Confirmer',
    confirmation_and_stay: 'Confirmer et rester',
    csv: {
      import_file: 'Importer un fichier .csv',
      export_file: 'Télécharger en .csv',
      import_title: 'Importer depuis un .csv',
      required_fields: 'Le fichier CSV à importer doit comporter les colonnes suivantes :',
      select_file: 'Sélectionner un fichier depuis votre dossier :',
      error_upload: 'Une erreur est survenue en téleversant votre fichier .csv.'
    }
  },

  login: {
    title: 'Se connecter à Kitsu',
    login: 'Se connecter',
    login_failed: 'La connexion a échoué, vérifiez vos identifiants',
    fields: {
      email: 'Adresse Mail',
      password: 'Mot de passe'
    }
  },

  productions: {
    title: 'Productions',
    edit_title: 'Modifier la production',
    new_production: 'Ajouter une production',
    number: 'production | productions',
    fields: {
      name: 'Nom',
      status: 'État'
    },
    status: {
      open: 'Ouvert',
      closed: 'Fermé'
    },
    delete_text: 'Êtes vous sûr de vouloir retirer {name} de la base de données?',
    delete_error: 'Une erreur est survenue lors de la suppression. Il y a probablement des données liées à cette production. Etes vous sur que cette production n\'a aucune tâche, shot ou asset lié ?'
  },

  comments: {
    retake: 'Reprise',
    validated: 'Validé !',
    validation_required: 'Validation requise',
    add_comment: 'Ajouter un commentaire...',
    post_status: 'Envoyer l\'état'
  },

  tasks: {
    preview: 'Pré-visualisation',
    validation: 'Validation',
    create_tasks: 'Ajouter des tâches',
    create_tasks_shot: 'Ajouter des tâches pour les plans affichés',
    create_tasks_shot_explaination: 'Vous allez créer une nouvelle tâche pour chaque plan de la liste affichée. Est-ce que vous voulez continuer ?',
    create_tasks_shot_failed: 'Une erreur serveur est survenue pendant la création des tâches.',
    create_tasks_asset: 'Ajouter des tâches pour les assets affichés',
    create_tasks_asset_explaination: 'Vous allez créer une nouvelle tâche pour chaque asset de la liste affichée. Est-ce que vous voulez continuer ?',
    create_tasks_asset_failed: 'Une erreur serveur est survenue pendant la création des tâches.',
    feedback: 'retours',
    fields: {
      task_type: 'Type de tâche'
    }
  },

  task_types: {
    title: 'Types de tâches',
    edit_title: 'Modifier le type de tâches',
    number: 'type de tâche | types de tâches',
    new_task_type: 'Ajouter un type de tâche',
    fields: {
      name: 'Nom',
      color: 'Couleur'
    },
    delete_text: 'Êtes vous sur de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue lors de la suppression du type de tâche. Êtes vous sûr qu\'aucune tâche n\'est lié à ce type de tâche ?'
  },

  asset_types: {
    title: 'Types d\'assets',
    edit_title: 'Modifier le type d\'asset',
    number: 'type d\'asset | types d\'assets',
    new_asset_type: 'Ajouter un type d\'asset',
    fields: {
      name: 'Nom'
    },
    delete_text: 'Êtes vous sur de vouloir enlever {name} de la base de données ?',
    delete_error: 'Une erreur est survenue en supprimant un type d\'asset. Êtes vous sûr qu\'aucun asset est lié à ce type d\'asset?'
  },

  assets: {
    title: 'Assets',
    edit_title: 'Modifier asset',
    number: 'asset | assets',
    new_asset: 'Ajouter un asset',
    edit_fail: 'La création ou l\'édition a échoué, une erreur est survenue.',
    new_success: 'Asset {name} créé avec succès.',
    fields: {
      name: 'Asset',
      type: 'Type',
      production: 'Prod'
    },
    delete_text: 'Etes vous sûr de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue en créant l\'asset, êtes vous sûr de vouloir que l\'asset n\'a plus aucun lien ?'
  },

  shots: {
    title: 'Plans',
    edit_title: 'Modifier plan',
    number: 'plan | plans',
    new_shot: 'Ajouter un plan',
    edit_fail: 'La création ou l\'édition a échoué, une erreur est survenue.',
    new_success: 'Plan {name} créé avec succès.',
    fields: {
      name: 'Plan',
      episode: 'Épisode',
      sequence: 'Séquence',
      production: 'Prod'
    },
    delete_text: 'Etes vous sûr de vouloir retirer {name} de la base de données ?',
    delete_error: 'Une erreur est survenue en créant le plant, êtes vous sûr que le plan n\'a plus aucun lien ?'
  },

  server_down: {
    title: 'Kitsu a rencontré une erreur en communiquant avec son API de données.',
    text: 'Contactez votre fournisseur, votre administrateur système ou votre déartement informatique pour comprendre ce qui ne va pas.'
  }

}
