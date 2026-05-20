import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { EntityKubernetesContent } from '@backstage/plugin-kubernetes';

export const entityPage = (
  <EntityLayout>
    
    {/* other tabs like overview */}
    <EntityLayout.Route path="/" title="Overview">
      <div>Entity Overview</div>
    </EntityLayout.Route>

    {/* Kubernetes MUST be inside entity layout */}
    <EntityLayout.Route path="/kubernetes" title="Kubernetes">
      <EntityKubernetesContent />
    </EntityLayout.Route>

  </EntityLayout>
);
