using Application.Abstractions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Application.GetNote;

public class GetNoteQueryHandler(IApplicationDbContext dbContext, ILogger<GetNoteQueryHandler> logger) : IRequestHandler<GetNoteQuery, GetNoteResponse>
{
    public async Task<GetNoteResponse> Handle(GetNoteQuery request, CancellationToken cancellationToken)
    {
        var note = await dbContext.Notes.SingleOrDefaultAsync(x => x.Id == request.NoteId, cancellationToken);

        if (note == null)
        {
            logger.LogWarning("Attempted to retrieve a note that does not exist. Note ID: {NoteId}", request.NoteId);
            throw new InvalidOperationException($"Note with ID {request.NoteId} not found.");
        }

        return new GetNoteResponse(note.Id, note.Title, note.Content, note.CreatedAt, note.UpdatedAt);
    }
}