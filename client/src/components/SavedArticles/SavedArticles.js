// Import React
import React from "react";

// Import UI components from reactstrap framework
import { Card, CardHeader } from 'reactstrap';

// Saved articles component.
const SavedArticles = props => (
    <Card className="saved-articles main-content-section" id="articles">
        <CardHeader>
            <h2 class="card-header">Saved Articles:</h2>
        </CardHeader>
    </Card>
);

// Export saved articles component
export default SavedArticles;